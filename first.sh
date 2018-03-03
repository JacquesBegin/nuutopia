#!/bin/bash
curl -X POST --header 'Content-Type: application/json' -d '{ "password": "t t t t t" }' ' https://missionhack-coin.herokuapp.com/operator/wallets'
curl -X POST --header 'Content-Type: application/json' --header 'password: t t t t t' ' https://missionhack-coin.herokuapp.com/operator/wallets/a2fb4d3f93ea3d4624243c03f507295c0c7cb5b78291a651e5575dcd03dfeeeb/addresses'
curl -X POST --header 'Content-Type: application/json' --header 'password: t t t t t' ' https://missionhack-coin.herokuapp.com/operator/wallets/a2fb4d3f93ea3d4624243c03f507295c0c7cb5b78291a651e5575dcd03dfeeeb/addresses'
curl -X POST --header 'Content-Type: application/json' -d '{ "rewardAddress": "e155df3a1bac05f88321b73931b48b54ea4300be9d1225e0b62638f537e5544c" }' ' https://missionhack-coin.herokuapp.com/miner/mine'
