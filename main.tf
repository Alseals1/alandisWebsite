locals {
  s3_bucket_name = "alandis-website"
  domain         = "alandis.org"
  hosted_zone_id = "Z0350848393H7AQTNFDAV"
  cert_arn       = "arn:aws:acm:us-east-1:533267423631:certificate/12c9233b-63f7-4b81-8c48-877f824b6963"
}

resource "aws_s3_bucket" "main" {
  bucket = local.s3_bucket_name

  tags = {
    Name = "S3_Website"
  }
}

resource "null_resource" "upload_dist_folder" {
 provisioner "local-exec" {
  command = "aws s3 sync alandis-portfolio/dist s3://${aws_s3_bucket.main.bucket}/ --delete"
}
  depends_on = [aws_s3_bucket.main]
}

resource "aws_cloudfront_origin_access_control" "main" {
  name                              = "s3-cloudfront-oac"
  description                       = "Origin Access Control for S3 bucket"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
  origin_access_control_origin_type = "s3"
}

resource "aws_cloudfront_distribution" "main" {
  aliases             = [local.domain]
  default_root_object = "index.html"
  enabled             = true
  is_ipv6_enabled     = true
  wait_for_deployment = true

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6" # AWS-managed cache policy for static content
    target_origin_id       = local.s3_bucket_name
    viewer_protocol_policy = "redirect-to-https"
  }

  origin {
    domain_name              = aws_s3_bucket.main.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.main.id
    origin_id                = local.s3_bucket_name
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = local.cert_arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }

  tags = {
    Name = "CloudFront Distribution"
  }
}

resource "aws_s3_bucket_policy" "main" {
  bucket = aws_s3_bucket.main.id
  policy = data.aws_iam_policy_document.cloudfront_oac_access.json
}

data "aws_iam_policy_document" "cloudfront_oac_access" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.main.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = ["${aws_cloudfront_distribution.main.arn}"]
    }
  }
}

resource "aws_route53_record" "main" {
  name    = local.domain
  type    = "A"
  zone_id = local.hosted_zone_id

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.main.domain_name
    zone_id                = aws_cloudfront_distribution.main.hosted_zone_id
  }
}