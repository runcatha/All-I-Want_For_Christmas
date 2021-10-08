import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllGifts, postGift, deleteGift, putGift } from '../../services/gifts';
import { getAllGroups, postGroup, deleteGroup, putGroup, postUserToGroup } from '../../services/groups';
import MyWishlist from '../../screens/MyWishlist/MyWishlist';
import Profile from '../../screens/Profile/Profile';
import GroupProfile from '../../screens/GroupProfile/GroupProfile';
import StartAGroup from '../../screens/StartAGroup/StartAGroup';
import AddGift from '../../screens/AddGift/AddGift';
import Edit from '../../screens/Edit/Edit';
import GiftDetailpg from '../../screens/GiftDetailpg/GiftDetailpg';
import Home from '../../screens/Home/Home'
import AboutUs from '../../screens/AboutUs/AboutUs';
import Wishlist from '../../screens/Wishlist/Wishlist';
import { propTypes } from 'react-bootstrap/esm/Image';

import Search from '../../components/Search/Search'
import Sort from '../../components/Sort/Sort'
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'

export default function MainContainer(props) {
  const [gifts, setGifts] = useState([]);
  const [groups, setGroups] = useState([]);
  const history = useHistory();

  const [searchResult, setSearchResult] = useState(props.gifts)
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')

  useEffect(() => {
    const fetchGifts = async () => {
      const wishList = await getAllGifts();
      setGifts(wishList);
    };
    fetchGifts();
  }, []);

  useEffect(() => {
    const fetchGroups = async () => {
      const GroupList = await getAllGroups();
      setGroups(GroupList);
    };
    fetchGroups();
  }, []);

  const handleGiftCreate = async (giftData) => {
    const newGift = await postGift(giftData);
    setGifts((prevState) => [...prevState, newGift]);
    history.push('/my-list');
  };

  const handleGroupCreate = async (groupData) => {
    const newGroup = await postGroup(groupData);
    setGroups((prevState) => [...prevState, newGroup]);
    history.push('/profile');
  };

  const handleGiftDelete = async (id) => {
    await deleteGift(id);
    setGifts((prevState) => prevState.filter((gift) => gift.id !== id));
    history.push('/my-list');
  };

  const handleGroupDelete = async (id) => {
    await deleteGroup(id);
    setGroups((prevState) => prevState.filter((group) => group.id !== id));
    history.push('/profile');
  };

  const handleGiftUpdate = async (id, giftData) => {
    const updatedGift = await putGift(id, giftData);
    setGifts((prevState) =>
      prevState.map((gift) => {
        return gift.id === Number(id) ? updatedGift : gift;
      })
    );
    history.push('/my-list');
  };

  const handleUserToGroupCreate = async (group, user) => {
    console.log(group.id)
    console.log(user)
    if (group.users.includes(user)) {
      alert('Stop trying to break my app')
    } else {
      const addUser = await postUserToGroup(group.id);
      setGroups((prevState) => [...prevState, addUser]);
      window.location.reload()
    }
  }

  const handleGroupUpdate = async (id, groupData) => {
    const updatedGroup = await putGroup(id, groupData);
    setGroups((prevState) =>
      prevState.map((group) => {
        return group.id === Number(id) ? updatedGroup : group;
      })
    );
    history.push('/group-profile');

  };

  return (
    <Switch>
      <Route path='/about-us'>
        <AboutUs />
      </Route>
      <Route path='/my-list'>
        <MyWishlist gifts={gifts}
          currentUser={props.currentUser} />
          </Route>
      <Route path='/wishlist/:id'>
        <Wishlist gifts={gifts}/>
      </Route>
      <Route path='/profile'>
        <Profile groups={groups} />
      </Route>
      <Route path='/start-a-group'>
        <StartAGroup handleGroupCreate={handleGroupCreate} />
      </Route>
      <Route path='/groups/:id'>
        <GroupProfile groups={groups}
          currentUser={props.currentUser}
          handleUserToGroupCreate={handleUserToGroupCreate}
          handleGroupDelete={handleGroupDelete}/>
      </Route>
      <Route path='/gifts/:id/edit'>
        <Edit gifts={gifts} handleGiftUpdate={handleGiftUpdate} />
      </Route>
      <Route path='/gifts/:id'>
        <GiftDetailpg gifts={gifts} handleGiftDelete={handleGiftDelete}/>
      </Route>
      <Route path='/add-gift'>
        <AddGift handleGiftCreate={handleGiftCreate} />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
      {/* <Route path='/my-list/:id'>
        <Gift gifts={gifts} handleGiftDelete={handleGiftDelete} />
      </Route> */}
      {/* <Route path='/log-out'>
        <SignOut gifts={gifts} handleGiftDelete={handleGiftDelete} />
      </Route> */}
    </Switch>
  );
}