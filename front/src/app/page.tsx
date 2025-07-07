import { getHomePage } from './data/loaders';
import { notFound } from 'next/navigation';
import '../styles/global.css';
import { HeroSection } from '@/components/hero-section';
async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  console .log(data);
  return {...data.data}; 
}

export default async function Home() {
  const data = await loader();
  console.log(data);
  return (
    <div>
    <h1>{data.title}</h1>
    <p>{data.deskripsi}</p>
  </div>
  );
}
