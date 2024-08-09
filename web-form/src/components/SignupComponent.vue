<template>
  <form>
    <label for="email">Email:</label>
    <input type="email" id="email" required v-model="email">

    <label for="password">Password:</label>
    <input type="password" id="password" required v-model="password">

    <label>Role:</label>
        <select v-model="role">
            <option value="guitarist">guitarist</option>
            <option value="bassist">bassist</option>
        </select>

    <!-- add song by listening the keybord-->
    <label>songs:</label>
    <input type="text" v-model="tempSong" @keyup="addSong">

    <!-- show the song which be add in -->
     <div V-if="showSong" >
        <div V-if="showSong" v-for="s in songs" :key="s" class="pill" ><span @click="deleteSong(s)">{{ s }}</span></div>
     </div>
    

    <!-- checkbox for genre -->
    <div>
        <input type="checkbox" value="rock" v-model="genre">
        <label>rock</label>&nbsp;&nbsp;
        
        <input type="checkbox" value="matel" v-model="genre">
        <label>matel</label>&nbsp;&nbsp;

        <input type="checkbox" value="pop" v-model="genre">
        <label>pop</label>
    </div>

    <div class="term">
        <input type="checkbox" v-model="term" required>
        <label>Accept the term and condition</label>
    </div>

  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Term: {{ term }}</p>
  <p>Genre: {{ genre }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            term: false,
            genre: [],
            tempSong: '',
            songs: [],
            showSong: false
        }
    },

    methods: {

        addSong(e) {
            console.log(e)
            if(e.key === 'Enter') {
                if(!this.tempSong) {
                    alert("can't be empty")
                }
                else if(this.songs.includes(this.tempSong)) {
                    alert(this.tempSong + " already be add")
                }
                else {
                this.songs.push(this.tempSong)
                }
                this.tempSong = ''
            }
        },

        deleteSong(song) {
            console.log(song)
            this.songs = this.songs.filter((s)=> {
                return s!==song
            })
        }
    }

}
</script>

<style>

form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;

}

label {
    color: #aaa;
    display: inline-block;
    margin: 20px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input ,select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10 0 0;
    position: relative;
    top: 2px;
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
</style>