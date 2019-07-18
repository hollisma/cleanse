// const DEFAULT = {
//   open: true,
//   resizeTo: true,
//   resizeBy: true,
//   moveTo: true,
//   moveBy: true,
//   alert: true,
//   blur: true,
//   close: true,
//   confirm: false
// };

// var settings = {};
// await chrome.storage.sync.get(["cleanse_settings"], async user_settings => {
//   {
//   open,
//   resizeTo,
//   resizeBy,
//   moveTo,
//   moveBy,
//   alert,
//   blur,
//   close,
//   confirm
// } = settings});

// console.log("open", open);

// // open = open ? open : DEFAULT.open;

// console.log("open", open);
window.open = () => console.log("Page attempting to open new window");
window.resizeTo = () => console.log("Page attempting to resize window");
window.resizeBy = () => console.log("Page attempting to resize window");
window.moveTo = () => console.log("Page attempting to move window");
window.moveBy = () => console.log("Page attempting to move window");
window.alert = () => console.log("Page attempting to create alert");
window.blur = () =>
  console.log("Page attempting to move focus from current window");
window.close = () => console.log("Page attempting to close window");
window.confirm = () => console.log("Page attempting to create confirm");
window.moveBy = () => console.log("Page attempting to move window");
window.moveBy = () => console.log("Page attempting to move window");
window.moveBy = () => console.log("Page attempting to move window");
window.moveBy = () => console.log("Page attempting to move window");
window.moveBy = () => console.log("Page attempting to move window");
