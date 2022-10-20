import propTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAddTask}) => {
    const onclick= ()=>{
        onAdd()
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                
                color={showAddTask?'red':'green'} 
                onclick = {onclick} 
                text ={showAddTask?"Close":'Add'} />
        </header>
    )
}

Header.defaultProps = {
    title:"Task Tracker"
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header