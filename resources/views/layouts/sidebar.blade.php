<aside class="sidebar">
    <div class="block">

        <div class="block-header">
            Login
        </div>

        <div class="block-content">
            <input type="text" placeholder="Account">
            <input type="password" placeholder="Password">
            <input type="submit" value="Submit" class="blue">
        </div>

    </div>
    @if (Auth::check())
      <div class="block with-border">
          <div class="block-content">
              <div class="user-area">
                  <div class="user-info">
                      <div class="user-avatar">

                      </div>

                      <div class="user-details">
                          <p>AlexBUddy01</p>
                          <span class="bonuses">1223 bonuses</span>
                      </div>

                      <button class="logout">Logout</button>
                  </div>

              </div>

              <div class="user-buttons">
                  <a href="#" class="btn red-bg">Control panel</a>
                  <a href="#" class="btn blue-bg">Account settings</a>
              </div>

          </div>
      </div>
    @endif
</aside>
