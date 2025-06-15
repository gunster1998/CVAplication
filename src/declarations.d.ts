// 👇 если файла ещё нет — создайте
// CSS-модули
declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}

// Обычные .css (если вдруг импортируете)
declare module '*.css';

// Статичные изображения
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}
