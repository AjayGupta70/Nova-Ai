"use client"

"use client"

export function FloatingContacts() {
  return (
    <>
      {/* WhatsApp Float */}
      <a
        href="https://wa.me/7071011152"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp Business"
        className="fixed bottom-24 right-4 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform"
      >
        <div className="animate-scale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-8 w-8 animate-shine"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M380.9 97.1C339.3 55.5 283.6 32 224.1 32 
                 106.1 32 12 126.1 12 244.1c0 42.9 
                 11.4 84.5 33.1 121L0 480l117.7-30.9
                 c35.1 19.2 74.8 29.2 115.4 29.2h.1
                 c118 0 212.1-94.1 212.1-212.1
                 0-58.6-23.5-114.3-64.4-156.1zM224.1 
                 438.6h-.1c-35.6 0-70.4-9.5-100.7-27.5
                 l-7.2-4.3-69.8 18.3 18.6-68.1-4.7-7.4
                 C42.9 318.2 32 281.8 32 244.1 
                 32 141.9 109.9 64 224.1 64
                 c57.5 0 111.6 22.4 152.3 63.1
                 40.7 40.7 63.1 94.8 63.1 152.3
                 0 114.2-77.8 159.2-215.4 159.2z"
            />
            <text
              x="224"
              y="280"
              textAnchor="middle"
              fontSize="120"
              fontWeight="bold"
              fill="white"
            >
              B
            </text>
          </svg>
        </div>
        <span className="sr-only">Open WhatsApp Business chat</span>
      </a>

      {/* Google Dialer Float */}
      <a
        href="tel:+7071011152"
        aria-label="Call us"
        className="fixed bottom-4 right-4 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:scale-110 transition-transform"
      >
        <div className="animate-scale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-8 w-8 animate-shine"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M391 351c-20 0-39-3-57-9-5-2-11-1-15 3l-56 56c-68-35-123-90-158-158l56-56c4-4 5-10 3-15-6-18-9-37-9-57 0-14-11-25-25-25H79c-14 0-25 11-25 25 0 206 167 373 373 373 14 0 25-11 25-25v-70c0-14-11-25-25-25z"
            />
          </svg>
        </div>
        <span className="sr-only">Call us</span>
      </a>

      <style jsx>{`
        /* Scale (breathing) animation */
        .animate-scale {
          display: inline-block;
          animation: scaleAnim 2.5s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes scaleAnim {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        /* Color shining animation */
        .animate-shine {
          animation: shineAnim 2.5s ease-in-out infinite;
        }

        @keyframes shineAnim {
          0%, 100% { fill: white; filter: drop-shadow(0 0 0px #fff); }
          50% { fill: #ffff88; filter: drop-shadow(0 0 8px #fff); }
        }
      `}</style>
    </>
  )
}


export function WhatsAppFloat() {
  return (
    <>
      <a
        href="https://wa.me/7071011152"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp Business"
        className="fixed bottom-4 right-4 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform"
      >
        {/* Wrapper div for scale animation */}
        <div className="animate-scale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-8 w-8 animate-shine"
            aria-hidden="true"
          >
            <path
              className="icon-path"
              fill="currentColor"
              d="M380.9 97.1C339.3 55.5 283.6 32 224.1 32 
                 106.1 32 12 126.1 12 244.1c0 42.9 
                 11.4 84.5 33.1 121L0 480l117.7-30.9
                 c35.1 19.2 74.8 29.2 115.4 29.2h.1
                 c118 0 212.1-94.1 212.1-212.1
                 0-58.6-23.5-114.3-64.4-156.1zM224.1 
                 438.6h-.1c-35.6 0-70.4-9.5-100.7-27.5
                 l-7.2-4.3-69.8 18.3 18.6-68.1-4.7-7.4
                 C42.9 318.2 32 281.8 32 244.1 
                 32 141.9 109.9 64 224.1 64
                 c57.5 0 111.6 22.4 152.3 63.1
                 40.7 40.7 63.1 94.8 63.1 152.3
                 0 114.2-77.8 159.2-215.4 159.2z"
            />
            <text
              x="224"
              y="280"
              textAnchor="middle"
              fontSize="120"
              fontWeight="bold"
              fill="white"
            >
              B
            </text>
          </svg>
        </div>

        <span className="sr-only">Open WhatsApp Business chat</span>
      </a>

      <style jsx>{`
        /* Scale (breathing) animation */
        .animate-scale {
          display: inline-block;
          animation: scaleAnim 2.5s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes scaleAnim {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        /* Color shining animation */
        .animate-shine {
          animation: shineAnim 2.5s ease-in-out infinite;
        }

        @keyframes shineAnim {
          0%, 100% { fill: white; filter: drop-shadow(0 0 0px #fff); }
          50% { fill: #ffff88; filter: drop-shadow(0 0 8px #fff); }
        }
      `}</style>
    </>
  )
}
