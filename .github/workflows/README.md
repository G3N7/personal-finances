# Troubleshooting

If you get the error that says `your-script.sh: Permission denied` (more detailed example error below) you need to make the script you are using executable `git update-index --chmod=+x your_script.sh` [(Credit to Aileen Rae)]https://dev.to/aileenr/github-actions-fixing-the-permission-denied-error-for-shell-scripts-4gbl)

```
Run $WORK_DIR/helpers/wait-until.sh "docker compose logs | grep 'current.health=\"GREEN\"'"
  $WORK_DIR/helpers/wait-until.sh "docker compose logs | grep 'current.health=\"GREEN\"'"
  shell: /usr/bin/bash --noprofile --norc -e -o pipefail {0}
  env:
    WORK_DIR: .github/workflows
/home/runner/work/_temp/cd04a086-0a74-42b3-8e88-ccb3966f59ea.sh: line 1: .github/workflows/helpers/wait-until.sh: Permission denied
Error: Process completed with exit code 126.
```