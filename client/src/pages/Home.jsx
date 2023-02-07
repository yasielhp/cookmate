import { useEffect, useState } from 'react'
import { FormField, Loader, RenderCards } from '../components'

export const Home = () => {
  const [loading, setLoading] = useState(false)
  const [allRecipe, setAllRecipe] = useState(null)

  const [searchText, setSearchText] = useState('')
  const [searchedResults, setSearchedResults] = useState(null)
  const [searchTimeout, setSearchTimeout] = useState(null)

  useEffect(() => {
    const fetchAllRecipe = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          'https://dall-e-wco9.onrender.com/api/v1/posts',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (response.ok) {
          const result = await response.json()
          setAllRecipe(result.data.reverse())
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchAllRecipe()
  }, [])

  const handleSearchChange = e => {
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)
    setSearchTimeout(
      setTimeout(() => {
        const searchResults =
        allRecipe.filter(recipe =>
          recipe.name.toLowerCase().includes(searchText.toLowerCase())
        )
        setSearchedResults(searchResults)
      }, 500)
    )
  }
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-Gray text-[32px]'>
          Community recipes
        </h1>
        <p className='mt-2 text-Gray text-opacity-70'>
          Explore a collection of recipes created by the community using cohere's artificial intelligence
        </p>
      </div>
      <div className='mt-5'>
        <FormField
          labelName='Search recipe'
          type='text'
          placeholder='Search recipe'
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      <div className='mt-5'>
        {loading
          ? (
            <div className='flex justify-center items-center'>
              <Loader />
            </div>
            )
          : (
            <div className={`grid gap-5 ${!searchText && 'lg:grid-cols-3 grid-cols-1'}`}>
              {searchText
                ? (
                  <RenderCards data={searchedResults} title='No search results found' />
                  )
                : (
                  <RenderCards data={allRecipe} title='No published recipes' />
                  )}
            </div>
            )}
      </div>
    </section>
  )
}
