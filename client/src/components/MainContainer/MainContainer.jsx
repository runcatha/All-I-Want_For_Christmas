import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllGifts, postGift, deleteGift, putGift } from '../../services/gifts';
import { getAllGroups, postGroup, deleteGroup, putGroup } from '../../services/groups';
import MyWishlist from '../../screens/MyWishlist/MyWishlist';
import Profile from '../../screens/Profile/Profile';
import GroupProfile from '../../screens/GroupProfile/GroupProfile';
import StartAGroup from '../../screens/StartAGroup/StartAGroup';
import AddGift from '../../screens/AddGift/AddGift';
import Edit from '../../screens/Edit/Edit';
import GiftDetailpg from '../../screens/GiftDetailpg/GiftDetailpg';
import Home from '../../screens/Home/Home'
import AboutUs from '../../screens/AboutUs/AboutUs';

export default function MainContainer() {
  const [gifts, setGifts] = useState([]);
  const [groups, setGroups] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchGifts = async () => {
      const WishList = await getAllGifts();
      setGifts(WishList);
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
        <MyWishlist gifts={gifts} />
      </Route>
      <Route path='/profile'>
        <Profile groups={groups} />
      </Route>
      <Route path='/start-a-group'>
        <StartAGroup groups={groups} />
      </Route>
      <Route path='/group-profile'>
        <GroupProfile groups={groups} />
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