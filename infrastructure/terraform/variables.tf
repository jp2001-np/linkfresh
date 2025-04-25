# Terraform variables
variable "aws_region" {
  default = "us-east-1"
}

variable "ami_id" {
  description = "AMI ID for Ubuntu 20.04"
  default     = "ami-0c02fb55956c7d316" # Ubuntu 20.04 LTS
}

variable "key_name" {
  description = "SSH Key pair name"
}
