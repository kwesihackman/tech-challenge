import React, { useState, useEffect } from 'react'
import { IUser, AppState, IReactSelectOption, IAlbum } from '../../services/Types'
import * as API from '../../services/API'
import * as action from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import './home.css'
import AlbumList from '../albums/albumList/AlbumList'



const Home: React.FC = () => {
    const users = useSelector((state: AppState) => state.users)
    const [selectOptions, setSelectOptions] = useState<IReactSelectOption[]>([])
    const [selectedUserAlbums, setselectedUserAlbums] = useState<IAlbum[]>([])
    const dispatch = useDispatch()


    const fetchUsers = () => {
        API.fetchAllUsers()
            .then(response => fetchUsersSuccess(response.data))
            .catch((error) => console.log(error))
    }

    const fetchUserAlbums = (id: number) => {
        API.fetchUserAlbums(id)
            .then(response => setselectedUserAlbums(response.data))
            .catch((error) => console.log('getting albums failed', error))
    }

    const fetchAlbumsPhotos = (id: number) => {
        API.getAlbumsPhotos(id)
            .then(response => console.log('album photos ===>', response.data))
    }

    const fetchUsersSuccess = (data: IUser[]) => {
        dispatch(action.fetchUsersSuccess(data))
    }

    const prepareUsersForSelectOption = (): IReactSelectOption[] => {
        return (users.map((user: IUser) => ({
            value: user.id,
            label: user.name
        })))
    }

    const handleOptionSelected = (option: any) => {
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
        <div className="container">
                <div className="header">
                    <h1 className="text-white text-center py-4">User Albums App</h1>
                    <div className="form-inline d-flex justify-content-center">
                        <div className="form-group">
                            <label className="label">Switch User</label>
                            <select className="form-control" placeholder="select user" onChange={(option) => handleOptionSelected(option)}>
                                {selectOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <AlbumList albums={selectedUserAlbums}/>
                </div>

        </div>
    )
}

export default Home
