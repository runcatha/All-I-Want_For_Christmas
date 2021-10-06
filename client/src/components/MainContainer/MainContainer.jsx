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
import Gift from '../../screens/Gift/Gift';
import Home from '../../screens/Home/Home'

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
      <Route path='/'>
        <Home />
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
      <Route path='/my-list/:id/edit'>
        <Edit gifts={gifts} handleGiftUpdate={handleGiftUpdate} />
      </Route>
      <Route path='/my-list/:id'>
        <Gift gifts={gifts} />
      </Route>
      <Route path='/my-list/new'>
        <AddGift handleGiftCreate={handleGiftCreate} />
      </Route>
      <Route path='/my-list/:id'>
        <Gift gifts={gifts} handleGiftDelete={handleGiftDelete} />
      </Route>
    </Switch>
  );
}