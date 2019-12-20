import React, { useState, useEffect } from 'react'
import { IUser, AppState, IReactSelectOption, IAlbum } from '../../services/Types'
import * as API from '../../services/API'
import * as action from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import './home.css'
import AlbumList from '../albums/albumList/AlbumList'
import NoData from '../NoData'



const Home: React.FC = () => {
    const users = useSelector((state: AppState) => state.users)
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
    const [selectOptions, setSelectOptions] = useState<IReactSelectOption[]>([])
    const [selectedUserAlbums, setSelectedUserAlbums] = useState<IAlbum[]>([])
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [loadingAlbums, setLoadingAlbums] = useState(false)
    const dispatch = useDispatch()


    const fetchUsers = () => {
        setIsLoading(true)
        API.fetchAllUsers()
            .then(response => fetchUsersSuccess(response.data))
            .catch(() => fetchUsersFailed())
    }

    const fetchUserAlbums = () => {
        setLoadingAlbums(true)
        selectedUserId &&
            API.fetchUserAlbums(selectedUserId)
                .then(response => fetchUserAlbumsSuccess(response.data))
                .catch(() => fetchUserAlbumsFailed())
    }

    // const fetchAlbumsPhotos = (id: number) => {

    //     API.getAlbumsPhotos(id)
    //         .then(response => console.log('album photos ===>', response.data))
    //         .catch()
    // }

    const fetchUsersSuccess = (data: IUser[]) => {
        setSelectedUserId(1) //fetch the albums for the first user
        setIsLoading(false)
        dispatch(action.fetchUsersSuccess(data))
    }

    const prepareUsersForSelectOption = (): IReactSelectOption[] => {
        return (users.map((user: IUser) => ({
            value: user.id,
            label: user.name
        })))
    }

    const fetchUserAlbumsSuccess = (data: IAlbum[]) => {
        console.log('heyyy')
        setLoadingAlbums(false)
        setSelectedUserAlbums(data)
        updateUsersAlbums()
    }

    const updateUsersAlbums = () => {
        console.log(users)
        let user = users.find(user => user.id === 1)
        console.log('selected user is => ', user)
    }

    const fetchUsersFailed = () => {
        setIsLoading(false)
        setErrorMessage(`Something went wrong, please try again`)
    }

    const fetchUserAlbumsFailed = () => {
        setLoadingAlbums(false)
        setErrorMessage(`Fetching user albums failed, please try again`)
    }



    const handleOptionSelected = (option: any) => {
        setSelectedUserId(option.currentTarget.value)
    }

    useEffect(() => {
        fetchUserAlbums()

    }, [selectedUserId])

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
                    {
                        users.length === 0 ? <NoData title={errorMessage} /> : (
                            <div className="form-group">
                                <label className="label">Switch User</label>
                                <select className="form-control" placeholder="select user" onChange={(option) => handleOptionSelected(option)}>
                                    {selectOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
                                </select>
                            </div>
                        )
                    }
                </div>
            </div>
            {loadingAlbums ? <NoData title="Loading.." /> : (selectedUserId != null ? <AlbumList albums={selectedUserAlbums} /> : <></>)

            }

        </div>
    )
}

export default Home
