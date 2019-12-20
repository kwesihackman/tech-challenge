import React, { useState, useEffect } from 'react'
import { User, AppState, IReactSelectOption } from '../services/Types'
import * as API from '../services/API'
import * as action from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'



const Home: React.FC = () => {
        const users = useSelector((state:AppState) => state.users)
        const [selectOptions, setSelectOptions] = useState<IReactSelectOption[]>([])
        const dispatch = useDispatch()
    

    const fetchUsers = () => {
        API.fetchAllUsers()
        .then(response => fetchUsersSuccess(response.data))
        .catch((error) => console.log(error))
    }

    const fetchUserAlbums = (id:number) => {
        API.fetchUserAlbums(id)
        .then(response => console.log('users albums -->> ', response.data))
        .catch((error) => console.log('getting albums failed', error))
    }

    const fetchAlbumsPhotos = (id:number) => {
        API.getAlbumsPhotos(id)
        .then(response => console.log('album photos ===>', response.data))
    }

    const fetchUsersSuccess = (data:User[]) => {
        dispatch(action.fetchUsersSuccess(data))
    }

    const prepareUsersForSelectOption = ():IReactSelectOption[] => {
        return (users.map((user:User) => ({
          value: user.id,
          label: user.name
        })))
      }

    const handleOptionSelected = (option:any) => {
        console.log('selected option', option.currentTarget.value)
        fetchUserAlbums(option.currentTarget.value)
        fetchAlbumsPhotos(2)

    }

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        setSelectOptions(prepareUsersForSelectOption())
    }, [users])

    return (
        <div>
            {console.log(users)}
            {console.log(selectOptions)}
            <select onChange={(option) => handleOptionSelected(option)}>
    {selectOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option> )}
            </select>
            {/* {users.map(user => <h5>{user.name}</h5>)} */}
        </div>
    )
}

export default Home
