# Terraform outputs
output "instance_public_ip" {
  value = aws_instance.linkfresh_api.public_ip
}

output "instance_url" {
  value = "http://${aws_instance.linkfresh_api.public_dns}"
}
