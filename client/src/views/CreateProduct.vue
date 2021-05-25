<template>
  <div>
    <h1 class="title">Create your product</h1>
    <section class="hero  is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-7-widescreen">
              <form action="" class="box">
                <div class="field">
                  <label for="" class="label">URL</label>
                  <div class="control has-icons-left">
                    <input
                      type="text"
                      placeholder="e.g. https://youtube.com"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-link"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Name</label>
                  <div class="control has-icons-left">
                    <input type="text" placeholder="e.g name of video" class="input" required />
                    <span class="icon is-small is-left">
                      <i class="fas fa-signature"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Players</label>
                  <div class="control has-icons-left">
                    <input
                      type="text"
                      placeholder="e.g Faker, Khan, Show Maker"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-users"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Champions</label>
                  <div class="control has-icons-left">
                    <input
                      type="text"
                      placeholder="e.g Yasuo, Nidalee, Miss Fortune..."
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user-astronaut"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Tournaments</label>
                  <div class="control has-icons-left">
                    <input type="text" placeholder="e.g MSI 2019" class="input" required />
                    <span class="icon is-small is-left">
                      <i class="fas fa-chess"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Popular Score</label>
                  <div class="control has-icons-left">
                    <input type="text" placeholder="e.g #10000" class="input" required />
                    <span class="icon is-small is-left">
                      <i class="fas fa-fire-alt"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Key words</label>
                  <div class="control has-icons-left">
                    <input
                      type="text"
                      placeholder="e.g penta kills, backdoor, 1 vs 2, Solo Q"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Locations</label>
                  <div class="control has-icons-left">
                    <input type="text" placeholder="e.g Seoul, Korea" class="input" required />
                    <span class="icon is-small is-left">
                      <i class="fas fa-compass"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label for="" class="label">Teams</label>
                  <div class="control has-icons-left">
                    <input type="text" placeholder="e.g SKT, RNG" class="input" required />
                    <span class="icon is-small is-left">
                      <i class="fab fa-teamspeak"></i>
                    </span>
                  </div>
                </div>

                <div class="field is-grouped is-grouped-right">
                  <p class="control">
                    <a class="button is-primary">
                      Submit
                    </a>
                  </p>
                  <p class="control">
                    <a class="button is-light">
                      Cancel
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';

export default {

};
</script>
<style scoped lang="scss">
.title {
  text-align: center;
  color: white;
  font-size: 40px;
}
</style>
