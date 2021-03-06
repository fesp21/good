Users = Meteor.users;

Users.helpers({
    photos: function() {
        return Photos.find({ userId: this._id }, { sort: { uploadedAt: -1 }});
    },
    avatar: function() {
        var avatar = Avatars.findOne({ userId: this._id }, { sort: { uploadedAt: -1 } });
        return avatar ? avatar.url() : '/img/avatar.png';
    }
});

// HOOKS
Users.before.insert(function(userId, doc) {

    // Defaults
    if (_.has('profile', doc)) {
        doc.profile.bio = "Hello I'm good user.";
    }
});
