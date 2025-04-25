# Terraform main config
provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "linkfresh_api" {
  ami           = var.ami_id
  instance_type = "t2.micro"
  key_name      = var.key_name

  tags = {
    Name = "LinkFresh API Server"
  }

  user_data = <<-EOF
              #!/bin/bash
              sudo apt update
              sudo apt install -y nodejs npm
              git clone https://github.com/YOUR_GITHUB_USER/linkfresh.git
              cd linkfresh/api
              npm install
              npm start
              EOF
}

resource "aws_security_group" "linkfresh_sg" {
  name        = "linkfresh_sg"
  description = "Allow HTTP and SSH"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # SSH (be cautious!)
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # HTTP
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
