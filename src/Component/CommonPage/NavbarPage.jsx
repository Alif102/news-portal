


const NavbarPage = ({categories}) => {
    console.log(categories)

    
  return (
    <div>
      <h1>Navbaar page</h1>
      
              {/* {categories.map(category => (
      <div key={category.id} >
        <h1>
            {category.title}
        </h1>
         </div>
    ))} */}
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <a href={category.short_url}>{category.title}</a>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default NavbarPage
