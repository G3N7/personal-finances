# personal-finances

[![Dev Environment Health](https://github.com/G3N7/personal-finances/actions/workflows/dev-environement-health.yml/badge.svg)](https://github.com/G3N7/personal-finances/actions/workflows/dev-environement-health.yml)
[![Container Workflow](https://github.com/G3N7/personal-finances/actions/workflows/container-workflow.yml/badge.svg)](https://github.com/G3N7/personal-finances/actions/workflows/container-workflow.yml)

## Dev Setup

### Install Tools
Uses VS Code with Remote containers, you must install

* Docker Desktop [Windows](https://docs.docker.com/desktop/install/windows-install/) or [Mac](https://docs.docker.com/desktop/install/mac-install/)
* [VS Code](https://code.visualstudio.com/download)
* [VS Code Remote Container Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
* Git, id suggest [GitKraken](https://www.gitkraken.com/) but any will do.

### Clone Repo

Run `git clone https://github.com/G3N7/personal-finances` in what ever directory you like, to bring the code down locally.

### Opening Project
* Open VS Code, and Open Folder in it.
* Click the little green button in the bottom left of VSCode to reopen inside of a container.
* Once the environment is setup for the first time it will open much faster.
* run `npm start` to build and run the applications hosted via npm.

### Troubleshooting
If your Kibana frontend cannot be reached or you cannot contact the elastic search API, you should open the docker log for the `sebp/elk` container running in your docker desktop, and look for an error line.  The most common problem is the following error where the defaults need to be raised.

`bootstrap check failure [1] of [1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]`

If you see this error [set the max map count for your VM](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html#_set_vm_max_map_count_to_at_least_262144), then restart and you should be squared away.