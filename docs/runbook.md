# Runbook
# LinkFresh Ops Runbook

## Monitoring
- UptimeRobot for API health
- MongoDB Atlas built-in performance dashboard

## Backup
- MongoDB snapshots (daily, retained 7 days)

## Deployment
- Triggered via `cd.yml` GitHub Actions
- Infrastructure via Terraform → AWS EC2

## Incidents
- Slack channel for error alerts
- Retry failed scans via admin CLI

