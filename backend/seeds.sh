#!/bin/sh

curl 'http://localhost:3000/api/items' -X POST -H 'Content-Type: application/json' -H 'authorization: Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmFkODM5MTNkOWFiYmY1YTM1MDA2ZCIsInVzZXJuYW1lIjoiYmFydWNoIiwiZXhwIjoxNjU2MzUzMzM3LCJpYXQiOjE2NTExNjkzMzd9.NiQ6i2YOF66sOTUgV5pF8V-vGdKShQn3KvHuYbMqHQo' -H 'Origin: http://localhost:3001' -H 'Connection: keep-alive' -H 'Referer: http://localhost:3001/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-site' --data-raw '{"item":{"title":"Title","description":"about","image":"imageurl","tagList":[]}}'
