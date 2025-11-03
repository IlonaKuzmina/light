'use client';

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 xl:gap-20">
          {/* Left side - Text */}
          <div className="flex flex-col items-start gap-8 lg:gap-12 flex-1">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight"
              style={{ 
                color: '#211F27',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif'
              }}
            >
              Why<br />
              Choose Us
            </h2>
            <p 
              className="text-xl sm:text-2xl lg:text-3xl font-normal leading-normal"
              style={{ color: '#CAE7EA' }}
            >
              We're passionate about storytelling through technology — and committed to helping you capture every frame perfectly
            </p>
          </div>

          {/* Right side - Features Grid */}
          <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 flex-1 w-full">
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row items-stretch gap-6 lg:gap-8 w-full">
              {/* Top-tier professional gear */}
              <div 
                className="flex flex-col justify-center items-start gap-8 lg:gap-12 flex-1 p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
                style={{ 
                  backgroundColor: '#211F27',
                  minHeight: '280px'
                }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M53.491 10.5091C47.9819 5.01829 40.391 1.6092 32.0001 1.6001C15.2092 1.6001 1.6001 15.2092 1.6001 32C1.6001 48.7909 15.2092 62.4 32.0001 62.4C48.791 62.4 62.4001 48.7909 62.4001 32C62.391 23.6091 58.9819 16.0182 53.491 10.5091ZM46.0728 28.6455C46.0183 28.9818 45.8546 29.2819 45.6092 29.5182L39.8819 34.9819L41.1183 42.8C41.2546 43.6365 40.691 44.4272 39.8547 44.5637C39.5183 44.6182 39.1637 44.5546 38.8637 44.391L31.891 40.6273L24.8365 44.2273C24.0819 44.6091 23.1547 44.3092 22.7638 43.5546C22.6092 43.2546 22.5546 42.9091 22.6183 42.5728L24.0547 34.7819L18.4456 29.1728C17.8546 28.5637 17.8637 27.5909 18.4728 26.9909C18.7092 26.7637 19.0183 26.6092 19.3456 26.5637L27.2001 25.5182L30.7819 18.4637C31.1637 17.7001 32.091 17.3909 32.8546 17.7727C33.1638 17.9273 33.4092 18.1819 33.5547 18.5L36.9728 25.6455L44.791 26.8728C45.6365 27.0091 46.2092 27.8091 46.0728 28.6455Z" fill="#51FF48"/>
                </svg>
                <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-bold leading-normal tracking-wide"
                  style={{ color: '#CAE7EA' }}
                >
                  Top-tier<br />
                  professional gear
                </h3>
              </div>

              {/* Meticulous quality control */}
              <div 
                className="flex flex-col justify-center items-start gap-8 lg:gap-12 flex-1 p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
                style={{ 
                  backgroundColor: '#211F27',
                  minHeight: '280px'
                }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_15_415)">
                    <mask id="mask0_15_415" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
                      <path d="M0 0H64V64H0V0Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_15_415)">
                      <path d="M24.0787 27.9444C22.729 26.5948 20.5408 26.5948 19.1912 27.9444C17.8415 29.2941 17.8415 31.4823 19.1912 32.832L25.6704 39.3112C27.02 40.6608 29.2082 40.6608 30.5578 39.3112L42.9649 26.9042C44.3145 25.5545 44.3145 23.3664 42.9649 22.0166C41.6152 20.667 39.427 20.667 38.0773 22.0166L28.1141 31.9799L24.0787 27.9444Z" fill="#51FF48"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M30.3196 0C13.5745 0 0 13.5745 0 30.3196C0 47.0647 13.5745 60.6394 30.3196 60.6394C37.1208 60.6394 43.4034 58.3963 48.4605 54.6152L56.5706 62.7254C58.2702 64.4248 61.0258 64.4248 62.7254 62.7254C64.4248 61.0258 64.4248 58.2702 62.7254 56.5706L54.6152 48.4605C58.3963 43.4034 60.6394 37.1208 60.6394 30.3196C60.6394 13.5745 47.0647 0 30.3196 0ZM8.704 30.3196C8.704 18.3817 18.3817 8.704 30.3196 8.704C42.2577 8.704 51.9354 18.3817 51.9354 30.3196C51.9354 36.2899 49.5206 41.6878 45.6042 45.6042C41.6878 49.5206 36.2899 51.9354 30.3196 51.9354C18.3817 51.9354 8.704 42.2577 8.704 30.3196Z" fill="#51FF48"/>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_15_415">
                      <rect width="64" height="64" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-bold leading-normal tracking-wide"
                  style={{ color: '#CAE7EA' }}
                >
                  Meticulous quality<br />
                  control
                </h3>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row items-stretch gap-6 lg:gap-8 w-full">
              {/* Flexible rental terms */}
              <div 
                className="flex flex-col justify-center items-start gap-8 lg:gap-12 flex-1 p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
                style={{ 
                  backgroundColor: '#211F27',
                  minHeight: '280px'
                }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_15_423)">
                    <path d="M46 5.3335H42.6665V2.6665C42.6665 1.19482 41.4746 0 40 0C38.5254 0 37.3335 1.19482 37.3335 2.6665V5.3335H16V2.6665C16 1.19482 14.8081 0 13.3335 0C11.8589 0 10.6665 1.19482 10.6665 2.6665V5.3335H7.3335C3.28809 5.3335 0 8.62109 0 12.6665V42.6665C0 47.0771 3.58936 50.6665 8 50.6665H21.3335C22.8081 50.6665 24 49.4722 24 48C24 46.5278 22.8081 45.3335 21.3335 45.3335H8C6.52783 45.3335 5.3335 44.1362 5.3335 42.6665V21.3335H48C48 22.8052 49.1919 24 50.6665 24C52.1411 24 53.3335 22.8052 53.3335 21.3335V12.6665C53.3335 8.62109 50.0454 5.3335 46 5.3335Z" fill="#51FF48"/>
                    <path d="M46.6665 29.3335C37.1094 29.3335 29.3335 37.1094 29.3335 46.6665C29.3335 56.2241 37.1094 64 46.6665 64C56.2241 64 64 56.2241 64 46.6665C64 37.1094 56.2241 29.3335 46.6665 29.3335ZM54.6826 43.7466L46.0161 53.7466C45.5308 54.3066 44.8345 54.6372 44.0962 54.6665C44.064 54.6665 44.0322 54.6665 44 54.6665C43.2935 54.6665 42.6162 54.3867 42.1147 53.8853L37.4482 49.2188C36.4053 48.1758 36.4053 46.4907 37.4482 45.4482C38.4907 44.4053 40.1758 44.4053 41.2188 45.4482L43.8613 48.0908L50.6509 40.2559C51.6162 39.1411 53.3013 39.0269 54.4136 39.9868C55.5254 40.9492 55.6455 42.6348 54.6826 43.7466Z" fill="#51FF48"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_15_423">
                      <rect width="64" height="64" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-bold leading-normal tracking-wide"
                  style={{ color: '#CAE7EA' }}
                >
                  Flexible<br />
                  rental terms
                </h3>
              </div>

              {/* Reliable support and expert advice */}
              <div 
                className="flex flex-col justify-center items-start gap-8 lg:gap-12 flex-1 p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
                style={{ 
                  backgroundColor: '#211F27',
                  minHeight: '280px'
                }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_15_427)">
                    <path d="M0 56.5H26.25V64H0V56.5Z" fill="#51FF48"/>
                    <path d="M54.625 0H35.875C30.7059 0 26.5 4.20588 26.5 9.375V13.125C26.5 17.6533 29.7264 21.4399 34 22.3114V27.409L43.8181 22.5H54.625C59.7941 22.5 64 18.2941 64 13.125V9.375C64 4.20588 59.7941 0 54.625 0ZM39.625 13.125H35.875V9.375H39.625V13.125ZM47.125 13.125H43.375V9.375H47.125V13.125ZM54.625 13.125H50.875V9.375H54.625V13.125Z" fill="#51FF48"/>
                    <path d="M39.4014 34.0482C39.4014 31.977 37.7225 30.2981 35.6514 30.2981H20.6514C11.346 30.2981 3.77637 37.8678 3.77637 47.1731V52.75H22.5264V50.9231C22.5264 49.8886 23.3669 49.0481 24.4014 49.0481H35.6514C38.4986 49.0481 41.2196 48.1418 43.5249 46.4243C54.2269 38.4225 50.6122 41.1359 57.7215 35.7788C59.3745 34.533 59.705 32.183 58.4591 30.5298C57.2135 28.8765 54.8631 28.5463 53.2101 29.7921C51.913 30.7695 53.9917 29.2105 39.024 40.4239L39.0152 40.4124C37.9329 41.164 36.7764 41.5482 35.6511 41.5482H22.5261L22.5259 37.7982H35.6511C37.7225 37.7982 39.4014 36.119 39.4014 34.0482Z" fill="#51FF48"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_15_427">
                      <rect width="64" height="64" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-bold leading-normal tracking-wide"
                  style={{ color: '#CAE7EA' }}
                >
                  Reliable support and expert advice
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
