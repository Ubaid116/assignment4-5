// src/app/blog/[id]/page.tsx

const blogDetails = {
    1: { title: 'LBWK', content: 'Liberty Walk specializes in transforming high-end sports cars, supercars, and luxury vehicles, like Lamborghinis, Ferraris, and Nissan GT-Rs, into eye-catching, low-slung, and aggressively styled machines. LBWK builds often feature air suspension systems, allowing the car to be lowered to the ground when parked (creating the appearance of a "slammed" stance) and raised when driving to ensure usability and clearance on regular roads.Liberty Walk specializes in transforming high-end sports cars, supercars, and luxury vehicles, like Lamborghinis, Ferraris, and Nissan GT-Rs, into eye-catching, low-slung, and aggressively styled machines. LBWK builds often feature air suspension systems, allowing the car to be lowered to the ground when parked (creating the appearance of a "slammed" stance) and raised when driving to ensure usability and clearance on regular roads ' },
    2: { title: 'JDM', content: ' Over time, JDM has evolved into a global car culture phenomenon, admired for its high-performance cars, reliability, innovative technology, and unique aesthetic appeal.JDM cars are known for their balance of everyday usability and racing pedigree, often reflecting Japan’s advanced engineering and automotive culture.Over time, JDM has evolved into a global car culture phenomenon, admired for its high-performance cars, reliability, innovative technology, and unique aesthetic appeal.JDM cars are known for their balance of everyday usability and racing pedigree, often reflecting Japan’s advanced engineering and automotive culture.Over time, JDM has evolved into a global car culture phenomenon, admired for its high-performance cars, reliability, innovative technology, and unique aesthetic appeal.JDM cars are known for their balance of everyday usability and racing pedigree, often reflecting Japan’s advanced engineering and automotive culture. ' },
    3: { title: 'MARLBORO', content: 'They are probably best known for their involvement in Formula 1, starting with BRM in the early 70’s, moving to Mclaren in the 80’s, and finding an eventual home with Ferrari, whom they still sponsor today (some say subliminally…). Phillip Morris is a hugely profitable company and it is no coincidence that their endorsement of a team has historically resulted in a winning car.' },
    4: { title: 'MARTINI', content: 'Martini Racing is the name under which various motor racing teams race when sponsored by the Italian company Martini & Rossi, a distillery that produces Martini vermouth in Turin. Distinctive livery featuring blue, red, and white stripes, seen on Porsche, Lancia, and Williams F1 cars.' },
    5: { title: 'JPS', content: 'John Player Special, a luxury tobacco brand known for its classic black and gold Lotus F1 livery.John Player Special, a luxury tobacco brand known for its classic black and gold Lotus F1 livery.John Player Special, a luxury tobacco brand known for its classic black and gold Lotus F1 livery.' },
    6: { title: 'RENAULT-ELF', content: 'Renault, a French automobile manufacturer, has been associated with Formula One as both team owner and engine manufacturer for various periods since 1977.Renault, a French automobile manufacturer, has been associated with Formula One as both team owner and engine manufacturer for various periods since 1977.' },
  };
  
  export default function BlogDetails({ params }: { params: { id: string } }) {
    const { id } = params;
    
    
    const blog = blogDetails[id as unknown as keyof typeof blogDetails];
  
    if (!blog) return <p>Blog not found</p>;
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-yellow-500 bg-slate-800 p-4 font-bold mb-4">{blog.title}</h1>
        <p className="text-white bg-slate-800 p-4">{blog.content}</p>
      </div>
    );
  }
  