// src/app/page.tsx
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'LBWK',
    description: ' a Japanese tuning company founded by Wataru Kato. It is known globally for its aggressive wide-body kits and custom car modifications.  ',
    image: 'https://i.pinimg.com/originals/eb/21/34/eb213447fd72eb3bc536dba2ceadaf34.jpg',
  },
  {
    id: 2,
    title: 'JDM',
    description: 'JDM stands for Japanese Domestic Market, which refers to vehicles and automotive parts designed specifically for sale and use in Japan. ',
    image: 'https://i.pinimg.com/736x/b9/5b/c0/b95bc08b800fa0483a4892989a4872a2.jpg',
  },
  {
    id: 3,
    title: 'Marlboro',
    description: 'Iconic tobacco brand seen on Ferrari and McLaren F1 cars. It has an iconic association with motorsport, particularly in Formula 1. ',
    image: 'https://i.redd.it/mclaren-marlboro-style-livery-created-by-v0-8jyxh0wo0oua1.jpg?width=1500&format=pjpg&auto=webp&s=2c276f1a7a8c5eab138fc1ccadff115504b9376c',
  },
  {
    id: 4,
    title: 'Martini Racing',
    description: 'Distinctive livery featuring blue, red, and white stripes, seen on Porsche, Lancia, and Williams F1 cars.',
    image: 'https://c4.wallpaperflare.com/wallpaper/938/500/14/top-gear-porsche-911-gt3-cup-martini-racing-wallpaper-preview.jpg',
  },
  {
    id: 5,
    title: 'JPS',
    description:  'John Player Special, a luxury tobacco brand known for its classic black and gold Lotus F1 livery.',
    image: 'https://i.etsystatic.com/51351589/r/il/a23438/6004647465/il_fullxfull.6004647465_7m25.jpg',
  },
  {
    id: 6,
    title: 'Renault-Elf',
    description: 'The partnership between Renault and Elf (a French oil company) brought striking yellow and blue liveries in Formula 1.',
    image: 'https://www.grandprix247.com/wp-content/uploads/2019/02/Renault-RE60-12-Feb-19-9-42-42-AM-1.jpg',
  },
];

export default function HomePage() {
  return (
    <div className="container   mx-auto px-4 py-8">
      <h2 className="text-3xl  font-bold text-center text-yellow-500 capitalize mb-8">GOLDEN LIVERY DESIGNS</h2>
      <div className="grid  text-yellow-500 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div 
            key={blog.id}
            className="border bg-slate-800 text-center text-white rounded-lg overflow-hidden transform hover:scale-105 shadow-lg hover:shadow-xl  transition-transform duration-300"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-yellow-500 font-bold">{blog.title}</h3>
              <p className="mt-2  text-y" >{blog.description}</p>
              <Link href={`/blog/${blog.id}`}>
                <div className="text-white text-center p-4 rounded-3xl transition mt-4 block hover:bg-yellow-300 hover:text-black bg-yellow-500">Read More</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
