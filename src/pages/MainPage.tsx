import {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonInput,
    IonButton,
    IonLabel,
} from '@ionic/react';
import './MainPage.css';
import React, { useEffect, useState } from 'react';
import firebase from '../firebaseConfig';
import { Redirect } from 'react-router';

const defaultUser = 'User';

const MainPage: React.FC = () => {
    const [posts, setPosts] = useState<
        {
            id: number;
            content: string;
            comments: { text: string; commenter: string }[];
            poster: string;
        }[]
    >([]);
    const [newPostContent, setNewPostContent] = useState('');
    const [newComment, setNewComment] = useState('');

    const [loggedIn, setLoggedIn] = useState(false);
    // start loading by default to wait for the authentication check
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // on Firebase authStateChange get the authneticated user information
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            // user is logged in
            if (user) {
                setLoggedIn(true);
            } else {
                // user is not logged in
                setLoggedIn(false);
            }
            // end loading
            setLoading(false);
        });

        // end the useEffect function to avoid memory leaks and unwanted behaviour
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <IonPage></IonPage>;
    }

    if (!loggedIn) {
        return <Redirect to="/login" />;
    }

    const submitPost = () => {
        const newPost = {
            id: posts.length + 1,
            content: newPostContent,
            comments: [],
            poster: defaultUser,
        };
        setPosts([...posts, newPost]);
        setNewPostContent('');
    };

    const addCommentToPost = (postId: number, comment: string) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
                const newComment = { text: comment, commenter: defaultUser };
                return { ...post, comments: [...post.comments, newComment] };
            }
            return post;
        });
        setPosts(updatedPosts);
        setNewComment('');
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <div className="ion-text-center mb-4">Forum</div>
                <IonCard>
                    <IonInput
                        placeholder="Write something..."
                        value={newPostContent}
                        onIonChange={(e) => setNewPostContent(e.detail.value!)}
                    ></IonInput>
                    <IonButton
                        onClick={submitPost}
                        expand="block"
                        type="submit"
                        className="w-100"
                    >
                        Post
                    </IonButton>
                </IonCard>

                {posts.map((post) => (
                    <IonCard key={post.id}>
                        <IonCardHeader>
                            <IonCardTitle>
                                Post {post.id} by {post.poster}
                            </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {post.content}
                            <div>
                                {post.comments.map((comment, index) => (
                                    <div
                                        key={index}
                                        className="comment-container"
                                    >
                                        <IonLabel>
                                            {comment.text} - {comment.commenter}
                                        </IonLabel>
                                    </div>
                                ))}
                            </div>
                            <IonCard>
                                <IonInput
                                    value={newComment}
                                    placeholder="Write a comment..."
                                    onIonChange={(e) =>
                                        setNewComment(e.detail.value!)
                                    }
                                ></IonInput>
                                <IonButton
                                    onClick={() =>
                                        addCommentToPost(post.id, newComment)
                                    }
                                    expand="block"
                                >
                                    Comment
                                </IonButton>
                            </IonCard>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default MainPage;
