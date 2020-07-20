<template>
  <div>
    <v-card>
      <div
        class="sib-form"
        style="text-align: center;
         background-color: #EFF2F7;                                           "
      >
        <div id="sib-form-container" class="sib-form-container">
          <div
            id="sib-container"
            class="sib-container--large sib-container--vertical"
            style="text-align:center; background-color:rgba(137,216,210,1); max-width:500px; border-radius:5px; border-width:0px; border-color:#000000; border-style:solid;"
          >
            <form
              id="sib-form"
              method="POST"
              action="https://387b815b.sibforms.com/serve/MUIEAPU0_uqhpyWPbrfAoFyRKNvJ4Dd0iyYh40hoFLvss8_Z94SR9oip-nOcVXayXcOd8namg7Zw4wo-LNlRa7SkH_ttlyWrFKNb_l1KCUj4wSHF6YRqyrLyPp0eps6-8THfnOekWC7qNi0khehJuTlr4FxmcC1v6Z8UE7AJSlgRM_D5zWZMCfTt_DLCJo93LuMEiPAROUC-wvtQ"
            >
              <div style="padding: 8px 0;">
                <div
                  class="sib-form-block"
                  style="font-size:20px; text-align:center; font-family: 'Times New Roman', sans-serif; color:#3C4858; background-color:transparent; border-width:px;"
                >
                  <p>Cayt Lawson's Newsletter</p>
                </div>
              </div>
              <div style="padding: 8px 0;">
                <div class="sib-input sib-form-block">
                  <div class="form__entry entry_block">
                    <div class="form__label-row">
                      <div class="entry__field">
                        <input
                          class="input"
                          maxlength="200"
                          type="text"
                          id="FIRSTNAME"
                          name="FIRSTNAME"
                          autocomplete="off"
                          placeholder="First Name"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>

                    <label
                      class="entry__error entry__error--primary"
                      style="font-size:16px; text-align:left; font-family:'Times New Roman';, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;"
                    ></label>
                  </div>
                </div>
              </div>
              <div style="padding: 8px 0;">
                <div class="sib-input sib-form-block">
                  <div class="form__entry entry_block">
                    <div class="form__label-row">
                      <div class="entry__field">
                        <input
                          class="input"
                          maxlength="200"
                          type="text"
                          id="LASTNAME"
                          name="LASTNAME"
                          autocomplete="off"
                          placeholder="Last Name"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>

                    <label
                      class="entry__error entry__error--primary"
                      style="font-size:16px; text-align:left; 'Times New Roman';, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;"
                    ></label>
                  </div>
                </div>
              </div>
              <div style="padding: 8px 0;">
                <div class="sib-input sib-form-block">
                  <div class="form__entry entry_block">
                    <div class="form__label-row">
                      <div class="entry__field">
                        <input
                          class="input"
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autocomplete="off"
                          placeholder="Email"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>

                    <label
                      class="entry__error entry__error--primary"
                      style="font-size:16px; text-align:left; font-family:'Times New Roman';, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;"
                    ></label>
                  </div>
                </div>
              </div>
              <div style="padding: 8px 0;">
                <div class="sib-form-block" style="text-align: center">
                  <button
                    class="sib-form-block__button sib-form-block__button-with-loader"
                    style="font-size:16px; text-align:center; font-weight:700; font-family:'Times New Roman';, sans-serif; color:#FFFFFF; background-color:#189d98; border-radius:3px; border-width:0px;"
                    form="sib-form"
                    type="submit"
                  >
                    <svg
                      class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                      />
                    </svg>
                    SUBSCRIBE
                  </button>
                </div>
              </div>
              <input type="text" name="email_address_check" value class="input--hidden" />
              <input type="hidden" name="locale" value="en" />
              <input type="hidden" name="html_type" value="simple" />
            </form>
          </div>
        </div>
        <br />
        <p
          style="font-size: 16px; text-align: justify;"
        >Don't miss out on book give aways and other prizes, along with exclusive first peek scenes, cover reveals, and news made available first only to my subscribers!</p>
      </div>
    </v-card>
  </div>
</template>


<style scoped>
p {
  font-family: "Times New Roman", Times, serif;
}
</style>