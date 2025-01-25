import { FilterType } from '../types'

interface FilterButtonsProps {
  filter: FilterType
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>
}

function FilterButtons({ filter, setFilter }: FilterButtonsProps) {
  const filters: FilterType[] = ['all', 'active', 'completed']

  return (
    <div className="btn-group" role="group" aria-label="Todo filters">
      {filters.map(f => (
        <button
          key={f}
          type="button"
          className={`btn ${filter === f ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFilter(f)}
        >
          {f[0].toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons
