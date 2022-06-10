const HeaderItem = ({title, Icon}) => {
    return (
      <div className="flex flex-col items-center w-20 group cursor-pointer md:mx-2">
          <img src={Icon} className="h-8 group-hover:animate-bounce mt-4" />
          <p className="text-white py-1 opacity-0 group-hover:opacity-100">{title}</p>
      </div>
    )
  }
  
  export default HeaderItem