// Definições das interfaces
interface Item {
  emoji?: string;
  text: string;
}

interface Pacote {
  titulo: string;
  tipo: string;
  items: Item[];
}
export default function PacoteCard({ titulo, tipo, items }: Pacote) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 ">
      <h2 className="text-xl font-bold text-customBlue">{titulo}</h2>
      <p className="text-sm text-gray-600 mb-2">{tipo}</p>
      <div className="flex flex-col  h-full">
        <ul className="list-disc list-inside text-gray-700">
          {" "}
          {/* Adicionei margem inferior */}
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-sm ">
              {item.emoji && <span className="text-sm">{item.emoji}</span>}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-3">
          <button className="bg-customBlue text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700 transition duration-200">
            <a
              href="https://wa.me/5531972041833"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar pacote
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
