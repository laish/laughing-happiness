/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Counter from '../islands/Counter.tsx';
import Navbar from '../components/Navbar.tsx';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <img
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class={tw`my-6`}>Laish</p>
        <Counter start={3} />
      </div>
    </div>
  );
}
