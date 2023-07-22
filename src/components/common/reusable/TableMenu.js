import React from 'react';
// import DeleteIcon from '../../../components/icons/DeleteIcon';
// import EraseIcon from '../../../components/icons/EraseIcon';
// import MuteIcon from '../../../components/icons/MuteIcon';
// import BlockIcon from '../../../components/icons/BlockIcon';
// import { bulkUpdateSubCollection, updateDocument,readDocumentById } from '../../../lib/firebase-query';

const TableMenu = ({groupId, userId}) => {
    // const handleOnMute = async(e) => {
    //     e.preventDefault()
    //     let previous = await readDocumentById("chat_groups", groupId);
    //     console.log("previosu", previous);
    //     if (previous) {
    //         const chatData = previous;
    //         const mutedArr = chatData.muted || [];
    //         if(!mutedArr.includes(userId)){
    //             mutedArr.push(userId);
    //         }
    //         await updateDocument("chat_groups", groupId, {isMute: true, muted: mutedArr}).then((res)=> {
    //             console.log("resultssss", res);
    //         }).catch((error)=> console.log("error", error))
    //         console.log("erase was clicked", e.target, groupId);
    //     } else {
    //         console.log("No such chat document exists!");
    //     }
    //     console.log("mute was clicked", e.target, groupId)
        
    // }
    // const handleOnDelete = async(e) => {
    //     e.preventDefault()
    //     await bulkUpdateSubCollection('chat_groups', groupId, 'chats', Date.now(), {isDeleted: true, deleted: [userId]}).then((res)=> {
    //         console.log("resultssss", res);
    //     }).catch((error)=> console.log("error", error))
    //     await updateDocument("chat_groups", groupId, {isDeleted: true, deleted: [userId]}).then((res)=> {
    //         console.log("resultssss", res);
    //     }).catch((error)=> console.log("error", error))
    //     console.log("delete was clicked",e.target, groupId)
    // }
    // const handleOnErase = async(e) => {
    //     e.preventDefault()
    //     await bulkUpdateSubCollection('chat_groups', groupId, 'chats', Date.now(), {isErased: true, erased: [userId]}).then((res)=> {
    //         console.log("resultssss", res);
    //     }).catch((error)=> console.log("error", error))
    //     console.log("erase was clicked",e.target, groupId)
    // }
    // const handleOnBlock = async(e) => {
    //     e.preventDefault()
    //     let previous = await readDocumentById("chat_groups", groupId);
    //     console.log("previosu", previous);
    //     if (previous) {
    //         const chatData = previous;
    //         const blockedArr = chatData.muted || [];
    //         if(!blockedArr.includes(userId)){
    //             blockedArr.push(userId);
    //         }
    //         await updateDocument("chat_groups", groupId, {isBlocked: true, blocked: blockedArr}).then((res)=> {
    //             console.log("resultssss", res);
    //         }).catch((error)=> console.log("error", error))
    //         console.log("erase was clicked", e.target, groupId);
    //     } else {
    //         console.log("No such chat document exists!");
    //     }
    //     console.log("block was clicked",e.target, groupId)
        
    // }
    return (
        <div className="dropdown">
            <button className='three-dots'>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="dropdown-content">
                <ul className='dropdown-list'>
                    <li>View</li>
                    <li>Edit</li>
                    <li>API lINK</li>
                    <li>3D Download</li>
                    <li>Delete</li>
                </ul>
            </div>
        </div>
    )
}
export default TableMenu;