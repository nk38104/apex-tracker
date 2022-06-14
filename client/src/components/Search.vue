<template>
    <section class="search">
        <h1>Track Player Stats</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="platform">Platform</label>
                <select name="platform" id="platform" v-model="platform">
                    <option value="psn">Playstation</option>
                    <option value="xbl">Xbox</option>
                    <option value="Origin">Origin</option>
                </select>
            </div>
            <div class="form-group">
                <label for="gamertag">Gamertag</label>
                <input type="text" name="gamertag" id="gamertag" v-model="gamertag" placeholder="Enter Origin ID, Xbox Live gamertag or PSN ID..." />
            </div>
            <div class="form-group">
                <input class="btn" type="submit" value="Submit">
            </div>
        </form>
    </section>
</template>


<script>
export default {
    name: "Search",
    data() {
        return {
            platform: "psn",
            gamertage: ""
        }
    },
    beforeCreate() {
        document.body.className = "body-bg-image"
    }
}
</script>


<style>

</style>