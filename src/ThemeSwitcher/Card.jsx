import haider from './Haider.jpg';

export default function Card() {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden transition-colors duration-300">
   <img
  className="w-full h-64 object-cover object-top p-4 rounded-2xl"
  src={haider}
  alt="Developer profile"
/>


      <div className="px-6 pb-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          React JS • Node JS • React Native Developer
        </h2>

        {/* Rating Stars */}
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 22 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.924 7.625a1.52 1.52 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.53 1.53 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.53 1.53 0 0 0 1.463 9.2l3.656 3.562-.863 5.032a1.53 1.53 0 0 0 2.226 1.616L11 17.032l4.518 2.376a1.53 1.53 0 0 0 2.226-1.616l-.863-5.032 3.656-3.562a1.52 1.52 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          {/* Empty Star */}
          <svg
            className="w-5 h-5 text-gray-300 dark:text-gray-600"
            fill="currentColor"
            viewBox="0 0 22 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.924 7.625a1.52 1.52 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.53 1.53 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.53 1.53 0 0 0 1.463 9.2l3.656 3.562-.863 5.032a1.53 1.53 0 0 0 2.226 1.616L11 17.032l4.518 2.376a1.53 1.53 0 0 0 2.226-1.616l-.863-5.032 3.656-3.562a1.52 1.52 0 0 0 .387-1.575Z" />
          </svg>

          <span className="ml-2 text-sm font-medium text-blue-800 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded">
            4.0
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Software Engineer
          </span>
          <a
            href="/"
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
