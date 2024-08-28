# Projeto para lanchonete com painel de admin

* adicionado no importmap.rb
  - pin "chart.js", to: "https://ga.jspm.io/npm:chart.js@4.4.1/dist/chart.js"
  - pin "@kurkle/color", to: "https://ga.jspm.io/npm:@kurkle/color@0.3.2/dist/color.esm.js"

* comando para rodar:
```bash
  bundle exec rails importmap:install # para instalar lib js de grafico
  rails g stimulus dashboard # para gerar a controller js
  clear && rails assets:precompile && clear && rails s
```
