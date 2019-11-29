/*
 * Amit Phaltankar.
 * 19/11/2019
 *
 * Packt MongoDB For Begginers.
 * Chapter 2 - Documents and Datatypes
 */

/*
 * Activity 2.01 Solution
 */

Step 1: Find and list various fields from the tweet
- creation date and time
- id
- user name 
- user profile pic
- user verification status
- hash tags
- mentions
- tweet text
- likes
- comments
- retweets


Step 2: Group related fields
From the above fields we can group 4 user fields, which are related. 
Also a tweet can have multiple hashtags and mentions, hence both of them can be represented as arrays.
Let's modify the list

- creation date and time
- user 
	- id
	- name 
	- profile pic
	- verification status
- hash tags
	- [tags]
- mentions
 	- [mentions]
- tweet text
- likes
- comments
- retweets

Step 3: Prepare user object and put the values from the tweet
{
	"id": "Lord_Of_Winterfell",
	"name": "Office of Ned Stark",
	"profile_pic": "https://user.profile.pic",
	"isVerified": true
}

Step 4: List down all the hashtags as an Array
[
	"north",
	"WinterfellCares",
	"flueshots"
]

Step 5: List down all the mentions as an Array
[
	"MaesterLuwin",
	"TheNedStark",
	"CatelynTheCat"
]

Step 6: Combine all documents together along with rest of the fields to get final output.

{
	"id": 1,
	"created_at": "Sun Apr 17 16:29:24 +0000 2011",
	"user": {
		"id": "Lord_Of_Winterfell",
		"name": "Office of Ned Stark",
		"profile_pic": "https://user.profile.pic",
		"isVerified": true
	},
	"text": "Tweeps in the #north. The long nights are upon us. Do stock enough warm clothes, meat and mead. Don't forget to take your flue shots, available for free at @MaesterLuwin's office. #WinterIsComing Thanks Mylord @TheNedStark and Mylady @CatelynTheCat #WinterfellCares #flueshots",
	"hashtags": [
		"north",
		"WinterfellCares",
		"flueshots"
	],
	"mentions": [
		"MaesterLuwin",
		"TheNedStark",
		"CatelynTheCat"
	],
	"likes_count": 14925,
	"retweet_count": 12165,
	"comments_count": 0
}

