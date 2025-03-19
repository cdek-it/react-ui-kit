## Как пользоваться

#### Установка
```bash
npm install @cdek/primereact
```

далее в scss своего проекта прописать
```scss
@use '@cdek/primereact/dist/theme-light.css';
```

### Иконки

В дизайне в основном используется https://tabler.io/icons/

Но можно подключать свои, так как с версии `1.1.0` они не идут в пакете

Подключить можно 3 вариантами
1. Иконки как шрифты
2. Иконки как svg
3. Иконки с CDN

### Иконки как шрифты
Начиная с версии `1.1.0` в пакете не будут добавляться иконки `@tabler/icons-webfont`

Чтобы их поставить нужно
```bash
npm install @tabler/icons-webfont
```

далее в scss прописать
```scss
@import "@tabler/icons-webfont/dist/tabler-icons.min.css";
```

*Прочитать внимательно*

При подключении иконок как шрифты у вас будет over 6000 иконок из которых вы будете использовать 1%, но весить все это будет много и грузится тоже долго. А во время загрузки будут квадраты

Поэтому лучше использовать как svg или на cdn

### Иконки как svg 
Подключаются как реакт компоненты, далее в сборке будут только те, которые нужны в проекте

Чтобы их поставить нужно
```bash
npm install @tabler/icons-react
```

далее в scss прописать
```scss
@import "@tabler/icons-webfont/dist/tabler-icons.min.css";
```

если используется vite, обязательно добавить строчку в `vite.config.ts`
```ts
  resolve: {
  alias: {
    //...
    '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
  },
},
```

если не добавить, будет оочень долгая сборка в дев режиме https://stackoverflow.com/questions/79194970/tabler-icons-for-react-slowing-down-app-on-initial-load

### Иконки с CDN

Добавляются в проекте в html, актуальность загруженной версии нужно смотреть в фронт-гильдии

```html
<link rel="preconnect" href="https://public-static.cdek.ru" />
<link
  rel="stylesheet"
  href="https://public-static.cdek.ru/common/icons/v3.30.0/tabler-icons.min.css"
/>
```
