import React, { use, useState } from 'react';
import { Authcontext } from '../provider/Authprovider';
import { updateProfile } from 'firebase/auth'; 
import { auth } from '../provider/Authprovider'; 

const My_profile = () => {
    const { user } = use(Authcontext); 
    const [name, setName] = useState(user ? user.displayName : '');
    const [photoURL, setPhotoURL] = useState(user ? user.photoURL : ''); 
    const [loading, setLoading] = useState(false);

    const handleUpdate = () => {
        setLoading(true);
       
        updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoURL 
        })
        .then(() => {
            setLoading(false);
            alert('Profile updated successfully');
        })
        .catch((error) => {
            setLoading(false);
            console.log(error);
            alert('Error updating profile');
        });
    };

    return (
        <div className="mt-36 max-w-md mx-auto p-5 border rounded-lg shadow-lg bg-yellow-100">
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>
            {user ? (
                <div className='space-y-4'>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name:</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="input input-bordered w-full mt-2" 
                        />
                    </div>
                    
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Photo URL:</label>
                        <input 
                            type="text" 
                            value={photoURL} 
                            onChange={(e) => setPhotoURL(e.target.value)} 
                            className="input input-bordered w-full mt-2" 
                        />
                    </div>

                    
                    <div className="mt-4">
                        <button 
                            onClick={handleUpdate} 
                            className="btn bg-yellow-400" 
                            disabled={loading}
                        >
                            {loading ? 'Updating...' : 'Update Profile'}
                        </button>
                    </div>

                    
                    <div className="mt-4">
                        <p><strong>Name:</strong> {user.displayName}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        {user.photoURL && <img src={user.photoURL} alt="User" className="w-24 h-24 rounded-full object-cover" />}
                    </div>
                </div>
            ) : (
                <p>Don't have any account please Login or Register.</p>
            )}
        </div>
    );
};

export default My_profile;
