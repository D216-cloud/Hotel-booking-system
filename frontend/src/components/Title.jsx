import React from 'react'

const Title = ({ title, subTitle, align, font, showDescription = true }) => {
  return (
    <div className={`flex flex-col justify-center items-center ${align === "left" ? "md:items-start md:text-left" : ""}`}>
      <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"} font-bold`}>
        {title}
      </h1>

      {showDescription && (
        <p className='text-base md:text-lg text-gray-500 mt-3 md:mt-4 max-w-3xl leading-relaxed text-center md:text-start mr-2'>
          {subTitle ? (
            subTitle
          ) : (
            <>
              Explore our <span className="text-black font-semibold">exclusive collection</span> of world-class properties, where <span className="italic text-black/80">timeless luxury</span> meets unforgettable experiences in every corner of the globe.
            </>
          )}
        </p>
      )}
    </div>
  )
}

export default Title
