"use client";
export default function Home() {
  const handleClick = () => {
    Notification.requestPermission().then((result) => {
      console.log(result);
      if (result === 'granted') {
        new Notification('Hello, world!', {
          body: 'Here is a notification body',
          icon: 'https://via.placeholder.com/150',
        });
      }
    });
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
}
