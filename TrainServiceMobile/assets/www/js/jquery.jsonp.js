  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-jsonp/src/jquery.jsonp.js at master · jaubourg/jquery-jsonp</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="jD7RCPO4S4+HD/vGlgdREHW/F3a1QpGzjvNHOLWlRwo=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-4df59ad6d250a025548cd4c6aaa1eb713a49049c.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-853ca93ac5a549fa8faf0da003398c7979ff0619.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-eee761b9d5e06efb064aaaf528c44ef8e1601e71.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/assets/github-539d7d656ca8f80c3b82d1313540436ce8c6deef.js" type="text/javascript"></script>
    

        <link rel='permalink' href='/jaubourg/jquery-jsonp/blob/cce6ae5fdd82362b274f7576eb96702f441c33c5/src/jquery.jsonp.js'>
    <meta property="og:title" content="jquery-jsonp"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/jaubourg/jquery-jsonp"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/3132902b0c2bd9b95eced29c649263a1?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery jsonp plugin. Contribute to jquery-jsonp development by creating an account on GitHub."/>

    <meta name="description" content="jquery jsonp plugin. Contribute to jquery-jsonp development by creating an account on GitHub." />

  <link href="https://github.com/jaubourg/jquery-jsonp/commits/master.atom" rel="alternate" title="Recent Commits to jquery-jsonp:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">
    <div id="wrapper">

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              
  <div class="topsearch command-bar-activated">
    <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="prejas" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>



    <ul class="top-nav">
        <li class="explore"><a href="https://github.com/explore">Explore</a></li>
        <li><a href="https://gist.github.com">Gist</a></li>
        <li><a href="/blog">Blog</a></li>
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
  </div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/prejas" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/0fd7c15d1233fbe8a8760d0a6379e545?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> prejas
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings (You have no verified emails)">
          <span class="mini-icon mini-icon-account-settings"></span>
            <span class="setting_warning">!</span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>



            
          </div>
        </div>


      <div class="global-notice warn"><div class="global-notice-inner"><h2>You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.</h2><p>Email verification will help our support team help you in case you have any email issues or lose your password.</p></div></div>

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


                  <ul class="pagehead-actions">

          <li class="subscription">
              <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="jD7RCPO4S4+HD/vGlgdREHW/F3a1QpGzjvNHOLWlRwo=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2958710" />
  <div class="context-menu-container js-menu-container js-context-menu">
    <span class="minibutton switcher bigger js-menu-target">
      <span class="js-context-button">
          <span class="mini-icon mini-icon-watching"></span>Watch
      </span>
    </span>

    <div class="context-pane js-menu-content">
      <a href="#" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
      <div class="context-title">Notification status</div>

      <div class="context-body pane-selector">
        <ul class="js-navigation-container">
          <li class="selector-item js-navigation-item js-navigation-target selected">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input checked="checked" id="do_included" name="do" type="radio" value="included" />
              <h4>Not watching</h4>
              <p>You will only receive notifications when you participate or are mentioned.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-watching"></span>
              Watch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_subscribed" name="do" type="radio" value="subscribed" />
              <h4>Watching</h4>
              <p>You will receive all notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-unwatch"></span>
              Unwatch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_ignore" name="do" type="radio" value="ignore" />
              <h4>Ignored</h4>
              <p>You will not receive notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-mute"></span>
              Stop ignoring
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
          </li>

          <li class="js-toggler-container js-social-container starring-container ">
            <a href="/jaubourg/jquery-jsonp/unstar" class="minibutton js-toggler-target starred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Unstar
            </a><a href="/jaubourg/jquery-jsonp/star" class="minibutton js-toggler-target unstarred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Star
            </a><a class="social-count js-social-count" href="/jaubourg/jquery-jsonp/stargazers">162</a>
          </li>

              <li><a href="/jaubourg/jquery-jsonp/fork" class="minibutton js-toggler-target fork-button lighter" rel="nofollow" data-method="post"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/jaubourg/jquery-jsonp/network" class="social-count">36</a>
              </li>


    </ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/jaubourg" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">jaubourg</span>
                  </a></span> /
                <strong><a href="/jaubourg/jquery-jsonp" class="js-current-repository">jquery-jsonp</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/jaubourg/jquery-jsonp" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/jaubourg/jquery-jsonp/network" highlight="repo_network">Network</a></li>
    <li><a href="/jaubourg/jquery-jsonp/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>2</span></a></li>

      <li><a href="/jaubourg/jquery-jsonp/issues" highlight="repo_issues">Issues <span class='counter'>3</span></a></li>

      <li><a href="/jaubourg/jquery-jsonp/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/jaubourg/jquery-jsonp/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
      <li><a href="/jaubourg/jquery-jsonp/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="#"
         class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
         data-hotkey="w"
         data-ref="master">
         <span><em class="mini-icon mini-icon-branch"></em><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="#" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable js-filterable-field" placeholder="Filter branches/tags">
            <ul class="tabs">
              <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches">
            <div data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/jaubourg/jquery-jsonp/blob/master/src/jquery.jsonp.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>
            <div class="no-results">Nothing to show</div>
          </div>

            <div class="js-filter-tab js-filter-tags filter-tab-empty" style="display:none">
              <div data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              </div>
              <div class="no-results">Nothing to show</div>
            </div>
        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/jaubourg/jquery-jsonp" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/jaubourg/jquery-jsonp/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/jaubourg/jquery-jsonp/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:9f41b1fbf20d6dde80a901b0e2b2afa9 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:9f41b1fbf20d6dde80a901b0e2b2afa9 -->

<div id="slider">


    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>
      <div class="breadcrumb">
        <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jaubourg/jquery-jsonp" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">jquery-jsonp</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jaubourg/jquery-jsonp/tree/master/src" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">src</span></a></span> / <strong class="final-path">jquery.jsonp.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="src/jquery.jsonp.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
      </div>

      <a href="/jaubourg/jquery-jsonp/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

        
  <div class="commit file-history-tease" data-path="src/jquery.jsonp.js/">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/3132902b0c2bd9b95eced29c649263a1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/jaubourg">jaubourg</a></span>
    <time class="js-relative-date" datetime="2012-08-21T06:18:54-07:00" title="2012-08-21 06:18:54">August 21, 2012</time>
    <div class="commit-title">
        <a href="/jaubourg/jquery-jsonp/commit/09b2e0a6d64604eae6fe85303b4c23a7bf7a5800" class="message">Removes unnecessary test for apply, if it's not a function, it'll bre…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/3132902b0c2bd9b95eced29c649263a1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jaubourg">jaubourg</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/jaubourg/jquery-jsonp/blob/cce6ae5fdd82362b274f7576eb96702f441c33c5/src/jquery.jsonp.js" data-title="jquery-jsonp/src/jquery.jsonp.js at master · jaubourg/jquery-jsonp · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>286 lines (226 sloc)</span>
                <span>7.685 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                        <a class="grouped-button minibutton bigger lighter tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/jaubourg/jquery-jsonp/edit/master/src/jquery.jsonp.js"
                           data-method="post" rel="nofollow">Edit</a>
                  </li>
                <li><a href="/jaubourg/jquery-jsonp/raw/master/src/jquery.jsonp.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a></li>
                  <li><a href="/jaubourg/jquery-jsonp/blame/master/src/jquery.jsonp.js" class="minibutton grouped-button bigger lighter">Blame</a></li>
                <li><a href="/jaubourg/jquery-jsonp/commits/master/src/jquery.jsonp.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a></li>
              </ul>
            </div>
                <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * jQuery JSONP Core Plugin 2.4.0 (2012-08-21)</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * https://github.com/jaubourg/jquery-jsonp</span></div><div class='line' id='LC5'><span class="cm"> *</span></div><div class='line' id='LC6'><span class="cm"> * Copyright (c) 2012 Julian Aubourg</span></div><div class='line' id='LC7'><span class="cm"> *</span></div><div class='line' id='LC8'><span class="cm"> * This document is licensed as free software under the terms of the</span></div><div class='line' id='LC9'><span class="cm"> * MIT License: http://www.opensource.org/licenses/mit-license.php</span></div><div class='line' id='LC10'><span class="cm"> */</span></div><div class='line' id='LC11'><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">$</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>	<span class="c1">// ###################### UTILITIES ##</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>	<span class="c1">// Noop</span></div><div class='line' id='LC16'>	<span class="kd">function</span> <span class="nx">noop</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC17'>	<span class="p">}</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'>	<span class="c1">// Generic callback</span></div><div class='line' id='LC20'>	<span class="kd">function</span> <span class="nx">genericCallback</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'>		<span class="nx">lastValue</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">data</span> <span class="p">];</span></div><div class='line' id='LC22'>	<span class="p">}</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>	<span class="c1">// Call if defined</span></div><div class='line' id='LC25'>	<span class="kd">function</span> <span class="nx">callIfDefined</span><span class="p">(</span> <span class="nx">method</span> <span class="p">,</span> <span class="nx">object</span> <span class="p">,</span> <span class="nx">parameters</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>		<span class="k">return</span> <span class="nx">method</span> <span class="o">&amp;&amp;</span> <span class="nx">method</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">object</span><span class="p">.</span><span class="nx">context</span> <span class="o">||</span> <span class="nx">object</span> <span class="p">,</span> <span class="nx">parameters</span> <span class="p">);</span></div><div class='line' id='LC27'>	<span class="p">}</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>	<span class="c1">// Give joining character given url</span></div><div class='line' id='LC30'>	<span class="kd">function</span> <span class="nx">qMarkOrAmp</span><span class="p">(</span> <span class="nx">url</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>		<span class="k">return</span> <span class="sr">/\?/</span> <span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">url</span> <span class="p">)</span> <span class="o">?</span> <span class="s2">&quot;&amp;&quot;</span> <span class="o">:</span> <span class="s2">&quot;?&quot;</span><span class="p">;</span></div><div class='line' id='LC32'>	<span class="p">}</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>	<span class="kd">var</span> <span class="c1">// String constants (for better minification)</span></div><div class='line' id='LC35'>		<span class="nx">STR_ASYNC</span> <span class="o">=</span> <span class="s2">&quot;async&quot;</span><span class="p">,</span></div><div class='line' id='LC36'>		<span class="nx">STR_CHARSET</span> <span class="o">=</span> <span class="s2">&quot;charset&quot;</span><span class="p">,</span></div><div class='line' id='LC37'>		<span class="nx">STR_EMPTY</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC38'>		<span class="nx">STR_ERROR</span> <span class="o">=</span> <span class="s2">&quot;error&quot;</span><span class="p">,</span></div><div class='line' id='LC39'>		<span class="nx">STR_INSERT_BEFORE</span> <span class="o">=</span> <span class="s2">&quot;insertBefore&quot;</span><span class="p">,</span></div><div class='line' id='LC40'>		<span class="nx">STR_JQUERY_JSONP</span> <span class="o">=</span> <span class="s2">&quot;_jqjsp&quot;</span><span class="p">,</span></div><div class='line' id='LC41'>		<span class="nx">STR_ON</span> <span class="o">=</span> <span class="s2">&quot;on&quot;</span><span class="p">,</span></div><div class='line' id='LC42'>		<span class="nx">STR_ON_CLICK</span> <span class="o">=</span> <span class="nx">STR_ON</span> <span class="o">+</span> <span class="s2">&quot;click&quot;</span><span class="p">,</span></div><div class='line' id='LC43'>		<span class="nx">STR_ON_ERROR</span> <span class="o">=</span> <span class="nx">STR_ON</span> <span class="o">+</span> <span class="nx">STR_ERROR</span><span class="p">,</span></div><div class='line' id='LC44'>		<span class="nx">STR_ON_LOAD</span> <span class="o">=</span> <span class="nx">STR_ON</span> <span class="o">+</span> <span class="s2">&quot;load&quot;</span><span class="p">,</span></div><div class='line' id='LC45'>		<span class="nx">STR_ON_READY_STATE_CHANGE</span> <span class="o">=</span> <span class="nx">STR_ON</span> <span class="o">+</span> <span class="s2">&quot;readystatechange&quot;</span><span class="p">,</span></div><div class='line' id='LC46'>		<span class="nx">STR_READY_STATE</span> <span class="o">=</span> <span class="s2">&quot;readyState&quot;</span><span class="p">,</span></div><div class='line' id='LC47'>		<span class="nx">STR_REMOVE_CHILD</span> <span class="o">=</span> <span class="s2">&quot;removeChild&quot;</span><span class="p">,</span></div><div class='line' id='LC48'>		<span class="nx">STR_SCRIPT_TAG</span> <span class="o">=</span> <span class="s2">&quot;&lt;script&gt;&quot;</span><span class="p">,</span></div><div class='line' id='LC49'>		<span class="nx">STR_SUCCESS</span> <span class="o">=</span> <span class="s2">&quot;success&quot;</span><span class="p">,</span></div><div class='line' id='LC50'>		<span class="nx">STR_TIMEOUT</span> <span class="o">=</span> <span class="s2">&quot;timeout&quot;</span><span class="p">,</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>		<span class="c1">// Window</span></div><div class='line' id='LC53'>		<span class="nx">win</span> <span class="o">=</span> <span class="nb">window</span><span class="p">,</span></div><div class='line' id='LC54'>		<span class="c1">// Deferred</span></div><div class='line' id='LC55'>		<span class="nx">Deferred</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">,</span></div><div class='line' id='LC56'>		<span class="c1">// Head element</span></div><div class='line' id='LC57'>		<span class="nx">head</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span> <span class="s2">&quot;head&quot;</span> <span class="p">)[</span> <span class="mi">0</span> <span class="p">]</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span></div><div class='line' id='LC58'>		<span class="c1">// Page cache</span></div><div class='line' id='LC59'>		<span class="nx">pageCache</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC60'>		<span class="c1">// Counter</span></div><div class='line' id='LC61'>		<span class="nx">count</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC62'>		<span class="c1">// Last returned value</span></div><div class='line' id='LC63'>		<span class="nx">lastValue</span><span class="p">,</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>		<span class="c1">// ###################### DEFAULT OPTIONS ##</span></div><div class='line' id='LC66'>		<span class="nx">xOptionsDefaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC67'>			<span class="c1">//beforeSend: undefined,</span></div><div class='line' id='LC68'>			<span class="c1">//cache: false,</span></div><div class='line' id='LC69'>			<span class="nx">callback</span><span class="o">:</span> <span class="nx">STR_JQUERY_JSONP</span><span class="p">,</span></div><div class='line' id='LC70'>			<span class="c1">//callbackParameter: undefined,</span></div><div class='line' id='LC71'>			<span class="c1">//charset: undefined,</span></div><div class='line' id='LC72'>			<span class="c1">//complete: undefined,</span></div><div class='line' id='LC73'>			<span class="c1">//context: undefined,</span></div><div class='line' id='LC74'>			<span class="c1">//data: &quot;&quot;,</span></div><div class='line' id='LC75'>			<span class="c1">//dataFilter: undefined,</span></div><div class='line' id='LC76'>			<span class="c1">//error: undefined,</span></div><div class='line' id='LC77'>			<span class="c1">//pageCache: false,</span></div><div class='line' id='LC78'>			<span class="c1">//success: undefined,</span></div><div class='line' id='LC79'>			<span class="c1">//timeout: 0,</span></div><div class='line' id='LC80'>			<span class="c1">//traditional: false,</span></div><div class='line' id='LC81'>			<span class="nx">url</span><span class="o">:</span> <span class="nx">location</span><span class="p">.</span><span class="nx">href</span></div><div class='line' id='LC82'>		<span class="p">},</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>		<span class="c1">// opera demands sniffing :/</span></div><div class='line' id='LC85'>		<span class="nx">opera</span> <span class="o">=</span> <span class="nx">win</span><span class="p">.</span><span class="nx">opera</span><span class="p">,</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>		<span class="c1">// IE &lt; 10</span></div><div class='line' id='LC88'>		<span class="nx">oldIE</span> <span class="o">=</span> <span class="o">!!</span><span class="nx">$</span><span class="p">(</span> <span class="s2">&quot;&lt;div&gt;&quot;</span> <span class="p">).</span><span class="nx">html</span><span class="p">(</span> <span class="s2">&quot;&lt;!--[if IE]&gt;&lt;i&gt;&lt;![endif]--&gt;&quot;</span> <span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;i&quot;</span><span class="p">).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>	<span class="c1">// ###################### MAIN FUNCTION ##</span></div><div class='line' id='LC91'>	<span class="kd">function</span> <span class="nx">jsonp</span><span class="p">(</span> <span class="nx">xOptions</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>		<span class="c1">// Build data with default</span></div><div class='line' id='LC94'>		<span class="nx">xOptions</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="p">{}</span> <span class="p">,</span> <span class="nx">xOptionsDefaults</span> <span class="p">,</span> <span class="nx">xOptions</span> <span class="p">);</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>		<span class="c1">// References to xOptions members (for better minification)</span></div><div class='line' id='LC97'>		<span class="kd">var</span> <span class="nx">successCallback</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">success</span><span class="p">,</span></div><div class='line' id='LC98'>			<span class="nx">errorCallback</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">error</span><span class="p">,</span></div><div class='line' id='LC99'>			<span class="nx">completeCallback</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">complete</span><span class="p">,</span></div><div class='line' id='LC100'>			<span class="nx">dataFilter</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">dataFilter</span><span class="p">,</span></div><div class='line' id='LC101'>			<span class="nx">callbackParameter</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">callbackParameter</span><span class="p">,</span></div><div class='line' id='LC102'>			<span class="nx">successCallbackName</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">callback</span><span class="p">,</span></div><div class='line' id='LC103'>			<span class="nx">cacheFlag</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">cache</span><span class="p">,</span></div><div class='line' id='LC104'>			<span class="nx">pageCacheFlag</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">pageCache</span><span class="p">,</span></div><div class='line' id='LC105'>			<span class="nx">charset</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">charset</span><span class="p">,</span></div><div class='line' id='LC106'>			<span class="nx">url</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span></div><div class='line' id='LC107'>			<span class="nx">data</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC108'>			<span class="nx">timeout</span> <span class="o">=</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">timeout</span><span class="p">,</span></div><div class='line' id='LC109'>			<span class="nx">pageCached</span><span class="p">,</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'>			<span class="c1">// Abort/done flag</span></div><div class='line' id='LC112'>			<span class="nx">done</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'>			<span class="c1">// Life-cycle functions</span></div><div class='line' id='LC115'>			<span class="nx">cleanUp</span> <span class="o">=</span> <span class="nx">noop</span><span class="p">,</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>			<span class="c1">// Support vars</span></div><div class='line' id='LC118'>			<span class="nx">supportOnload</span><span class="p">,</span></div><div class='line' id='LC119'>			<span class="nx">supportOnreadystatechange</span><span class="p">,</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'>			<span class="c1">// Request execution vars</span></div><div class='line' id='LC122'>			<span class="nx">firstChild</span><span class="p">,</span></div><div class='line' id='LC123'>			<span class="nx">script</span><span class="p">,</span></div><div class='line' id='LC124'>			<span class="nx">scriptAfter</span><span class="p">,</span></div><div class='line' id='LC125'>			<span class="nx">timeoutTimer</span><span class="p">;</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>		<span class="c1">// If we have Deferreds:</span></div><div class='line' id='LC128'>		<span class="c1">// - substitute callbacks</span></div><div class='line' id='LC129'>		<span class="c1">// - promote xOptions to a promise</span></div><div class='line' id='LC130'>		<span class="nx">Deferred</span> <span class="o">&amp;&amp;</span> <span class="nx">Deferred</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">defer</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC131'>			<span class="nx">defer</span><span class="p">.</span><span class="nx">done</span><span class="p">(</span> <span class="nx">successCallback</span> <span class="p">).</span><span class="nx">fail</span><span class="p">(</span> <span class="nx">errorCallback</span> <span class="p">);</span></div><div class='line' id='LC132'>			<span class="nx">successCallback</span> <span class="o">=</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">resolve</span><span class="p">;</span></div><div class='line' id='LC133'>			<span class="nx">errorCallback</span> <span class="o">=</span> <span class="nx">defer</span><span class="p">.</span><span class="nx">reject</span><span class="p">;</span></div><div class='line' id='LC134'>		<span class="p">}).</span><span class="nx">promise</span><span class="p">(</span> <span class="nx">xOptions</span> <span class="p">);</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>		<span class="c1">// Create the abort method</span></div><div class='line' id='LC137'>		<span class="nx">xOptions</span><span class="p">.</span><span class="nx">abort</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC138'>			<span class="o">!</span><span class="p">(</span> <span class="nx">done</span><span class="o">++</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">cleanUp</span><span class="p">();</span></div><div class='line' id='LC139'>		<span class="p">};</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>		<span class="c1">// Call beforeSend if provided (early abort if false returned)</span></div><div class='line' id='LC142'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">callIfDefined</span><span class="p">(</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">beforeSend</span> <span class="p">,</span> <span class="nx">xOptions</span> <span class="p">,</span> <span class="p">[</span> <span class="nx">xOptions</span> <span class="p">]</span> <span class="p">)</span> <span class="o">===</span> <span class="o">!</span><span class="mi">1</span> <span class="o">||</span> <span class="nx">done</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>			<span class="k">return</span> <span class="nx">xOptions</span><span class="p">;</span></div><div class='line' id='LC144'>		<span class="p">}</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'>		<span class="c1">// Control entries</span></div><div class='line' id='LC147'>		<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span> <span class="o">||</span> <span class="nx">STR_EMPTY</span><span class="p">;</span></div><div class='line' id='LC148'>		<span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span> <span class="o">?</span> <span class="p">(</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">data</span><span class="p">)</span> <span class="o">==</span> <span class="s2">&quot;string&quot;</span> <span class="o">?</span> <span class="nx">data</span> <span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">param</span><span class="p">(</span> <span class="nx">data</span> <span class="p">,</span> <span class="nx">xOptions</span><span class="p">.</span><span class="nx">traditional</span> <span class="p">)</span> <span class="p">)</span> <span class="o">:</span> <span class="nx">STR_EMPTY</span><span class="p">;</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>		<span class="c1">// Build final url</span></div><div class='line' id='LC151'>		<span class="nx">url</span> <span class="o">+=</span> <span class="nx">data</span> <span class="o">?</span> <span class="p">(</span> <span class="nx">qMarkOrAmp</span><span class="p">(</span> <span class="nx">url</span> <span class="p">)</span> <span class="o">+</span> <span class="nx">data</span> <span class="p">)</span> <span class="o">:</span> <span class="nx">STR_EMPTY</span><span class="p">;</span></div><div class='line' id='LC152'><br/></div><div class='line' id='LC153'>		<span class="c1">// Add callback parameter if provided as option</span></div><div class='line' id='LC154'>		<span class="nx">callbackParameter</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">url</span> <span class="o">+=</span> <span class="nx">qMarkOrAmp</span><span class="p">(</span> <span class="nx">url</span> <span class="p">)</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span> <span class="nx">callbackParameter</span> <span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;=?&quot;</span> <span class="p">);</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>		<span class="c1">// Add anticache parameter if needed</span></div><div class='line' id='LC157'>		<span class="o">!</span><span class="nx">cacheFlag</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">pageCacheFlag</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">url</span> <span class="o">+=</span> <span class="nx">qMarkOrAmp</span><span class="p">(</span> <span class="nx">url</span> <span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;_&quot;</span> <span class="o">+</span> <span class="p">(</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">()</span> <span class="p">).</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">+</span> <span class="s2">&quot;=&quot;</span> <span class="p">);</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>		<span class="c1">// Replace last ? by callback parameter</span></div><div class='line' id='LC160'>		<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/=\?(&amp;|$)/</span> <span class="p">,</span> <span class="s2">&quot;=&quot;</span> <span class="o">+</span> <span class="nx">successCallbackName</span> <span class="o">+</span> <span class="s2">&quot;$1&quot;</span> <span class="p">);</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>		<span class="c1">// Success notifier</span></div><div class='line' id='LC163'>		<span class="kd">function</span> <span class="nx">notifySuccess</span><span class="p">(</span> <span class="nx">json</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="p">(</span> <span class="nx">done</span><span class="o">++</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>				<span class="nx">cleanUp</span><span class="p">();</span></div><div class='line' id='LC168'>				<span class="c1">// Pagecache if needed</span></div><div class='line' id='LC169'>				<span class="nx">pageCacheFlag</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">pageCache</span> <span class="p">[</span> <span class="nx">url</span> <span class="p">]</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">s</span><span class="o">:</span> <span class="p">[</span> <span class="nx">json</span> <span class="p">]</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC170'>				<span class="c1">// Apply the data filter if provided</span></div><div class='line' id='LC171'>				<span class="nx">dataFilter</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">json</span> <span class="o">=</span> <span class="nx">dataFilter</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">xOptions</span> <span class="p">,</span> <span class="p">[</span> <span class="nx">json</span> <span class="p">]</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC172'>				<span class="c1">// Call success then complete</span></div><div class='line' id='LC173'>				<span class="nx">callIfDefined</span><span class="p">(</span> <span class="nx">successCallback</span> <span class="p">,</span> <span class="nx">xOptions</span> <span class="p">,</span> <span class="p">[</span> <span class="nx">json</span> <span class="p">,</span> <span class="nx">STR_SUCCESS</span><span class="p">,</span> <span class="nx">xOptions</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC174'>				<span class="nx">callIfDefined</span><span class="p">(</span> <span class="nx">completeCallback</span> <span class="p">,</span> <span class="nx">xOptions</span> <span class="p">,</span> <span class="p">[</span> <span class="nx">xOptions</span> <span class="p">,</span> <span class="nx">STR_SUCCESS</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>			<span class="p">}</span></div><div class='line' id='LC177'>		<span class="p">}</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>		<span class="c1">// Error notifier</span></div><div class='line' id='LC180'>		<span class="kd">function</span> <span class="nx">notifyError</span><span class="p">(</span> <span class="nx">type</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="p">(</span> <span class="nx">done</span><span class="o">++</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>				<span class="c1">// Clean up</span></div><div class='line' id='LC185'>				<span class="nx">cleanUp</span><span class="p">();</span></div><div class='line' id='LC186'>				<span class="c1">// If pure error (not timeout), cache if needed</span></div><div class='line' id='LC187'>				<span class="nx">pageCacheFlag</span> <span class="o">&amp;&amp;</span> <span class="nx">type</span> <span class="o">!=</span> <span class="nx">STR_TIMEOUT</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">pageCache</span><span class="p">[</span> <span class="nx">url</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">type</span> <span class="p">);</span></div><div class='line' id='LC188'>				<span class="c1">// Call error then complete</span></div><div class='line' id='LC189'>				<span class="nx">callIfDefined</span><span class="p">(</span> <span class="nx">errorCallback</span> <span class="p">,</span> <span class="nx">xOptions</span> <span class="p">,</span> <span class="p">[</span> <span class="nx">xOptions</span> <span class="p">,</span> <span class="nx">type</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC190'>				<span class="nx">callIfDefined</span><span class="p">(</span> <span class="nx">completeCallback</span> <span class="p">,</span> <span class="nx">xOptions</span> <span class="p">,</span> <span class="p">[</span> <span class="nx">xOptions</span> <span class="p">,</span> <span class="nx">type</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>			<span class="p">}</span></div><div class='line' id='LC193'>		<span class="p">}</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>		<span class="c1">// Check page cache</span></div><div class='line' id='LC196'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">pageCacheFlag</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">pageCached</span> <span class="o">=</span> <span class="nx">pageCache</span><span class="p">[</span> <span class="nx">url</span> <span class="p">]</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>			<span class="nx">pageCached</span><span class="p">.</span><span class="nx">s</span> <span class="o">?</span> <span class="nx">notifySuccess</span><span class="p">(</span> <span class="nx">pageCached</span><span class="p">.</span><span class="nx">s</span><span class="p">[</span> <span class="mi">0</span> <span class="p">]</span> <span class="p">)</span> <span class="o">:</span> <span class="nx">notifyError</span><span class="p">(</span> <span class="nx">pageCached</span> <span class="p">);</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>			<span class="c1">// Install the generic callback</span></div><div class='line' id='LC203'>			<span class="c1">// (BEWARE: global namespace pollution ahoy)</span></div><div class='line' id='LC204'>			<span class="nx">win</span><span class="p">[</span> <span class="nx">successCallbackName</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">genericCallback</span><span class="p">;</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>			<span class="c1">// Create the script tag</span></div><div class='line' id='LC207'>			<span class="nx">script</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span> <span class="nx">STR_SCRIPT_TAG</span> <span class="p">)[</span> <span class="mi">0</span> <span class="p">];</span></div><div class='line' id='LC208'>			<span class="nx">script</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">STR_JQUERY_JSONP</span> <span class="o">+</span> <span class="nx">count</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>			<span class="c1">// Set charset if provided</span></div><div class='line' id='LC211'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">charset</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC212'>				<span class="nx">script</span><span class="p">[</span> <span class="nx">STR_CHARSET</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">charset</span><span class="p">;</span></div><div class='line' id='LC213'>			<span class="p">}</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>			<span class="nx">opera</span> <span class="o">&amp;&amp;</span> <span class="nx">opera</span><span class="p">.</span><span class="nx">version</span><span class="p">()</span> <span class="o">&lt;</span> <span class="mf">11.60</span> <span class="o">?</span></div><div class='line' id='LC216'>				<span class="c1">// onerror is not supported: do not set as async and assume in-order execution.</span></div><div class='line' id='LC217'>				<span class="c1">// Add a trailing script to emulate the event</span></div><div class='line' id='LC218'>				<span class="p">(</span> <span class="p">(</span> <span class="nx">scriptAfter</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span> <span class="nx">STR_SCRIPT_TAG</span> <span class="p">)[</span> <span class="mi">0</span> <span class="p">]</span> <span class="p">).</span><span class="nx">text</span> <span class="o">=</span> <span class="s2">&quot;document.getElementById(&#39;&quot;</span> <span class="o">+</span> <span class="nx">script</span><span class="p">.</span><span class="nx">id</span> <span class="o">+</span> <span class="s2">&quot;&#39;).&quot;</span> <span class="o">+</span> <span class="nx">STR_ON_ERROR</span> <span class="o">+</span> <span class="s2">&quot;()&quot;</span> <span class="p">)</span></div><div class='line' id='LC219'>			<span class="o">:</span></div><div class='line' id='LC220'>				<span class="c1">// onerror is supported: set the script as async to avoid requests blocking each others</span></div><div class='line' id='LC221'>				<span class="p">(</span> <span class="nx">script</span><span class="p">[</span> <span class="nx">STR_ASYNC</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">STR_ASYNC</span> <span class="p">)</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>			<span class="p">;</span></div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'>			<span class="c1">// Internet Explorer: event/htmlFor trick</span></div><div class='line' id='LC226'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">oldIE</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC227'>				<span class="nx">script</span><span class="p">.</span><span class="nx">htmlFor</span> <span class="o">=</span> <span class="nx">script</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC228'>				<span class="nx">script</span><span class="p">.</span><span class="nx">event</span> <span class="o">=</span> <span class="nx">STR_ON_CLICK</span><span class="p">;</span></div><div class='line' id='LC229'>			<span class="p">}</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>			<span class="c1">// Attached event handlers</span></div><div class='line' id='LC232'>			<span class="nx">script</span><span class="p">[</span> <span class="nx">STR_ON_LOAD</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">script</span><span class="p">[</span> <span class="nx">STR_ON_ERROR</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">script</span><span class="p">[</span> <span class="nx">STR_ON_READY_STATE_CHANGE</span> <span class="p">]</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">result</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>				<span class="c1">// Test readyState if it exists</span></div><div class='line' id='LC235'>				<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">script</span><span class="p">[</span> <span class="nx">STR_READY_STATE</span> <span class="p">]</span> <span class="o">||</span> <span class="o">!</span><span class="sr">/i/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">script</span><span class="p">[</span> <span class="nx">STR_READY_STATE</span> <span class="p">]</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC236'><br/></div><div class='line' id='LC237'>					<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'>						<span class="nx">script</span><span class="p">[</span> <span class="nx">STR_ON_CLICK</span> <span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">script</span><span class="p">[</span> <span class="nx">STR_ON_CLICK</span> <span class="p">]();</span></div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'>					<span class="p">}</span> <span class="k">catch</span><span class="p">(</span> <span class="nx">_</span> <span class="p">)</span> <span class="p">{}</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>					<span class="nx">result</span> <span class="o">=</span> <span class="nx">lastValue</span><span class="p">;</span></div><div class='line' id='LC244'>					<span class="nx">lastValue</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC245'>					<span class="nx">result</span> <span class="o">?</span> <span class="nx">notifySuccess</span><span class="p">(</span> <span class="nx">result</span><span class="p">[</span> <span class="mi">0</span> <span class="p">]</span> <span class="p">)</span> <span class="o">:</span> <span class="nx">notifyError</span><span class="p">(</span> <span class="nx">STR_ERROR</span> <span class="p">);</span></div><div class='line' id='LC246'><br/></div><div class='line' id='LC247'>				<span class="p">}</span></div><div class='line' id='LC248'>			<span class="p">};</span></div><div class='line' id='LC249'><br/></div><div class='line' id='LC250'>			<span class="c1">// Set source</span></div><div class='line' id='LC251'>			<span class="nx">script</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'>			<span class="c1">// Re-declare cleanUp function</span></div><div class='line' id='LC254'>			<span class="nx">cleanUp</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">i</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC255'>				<span class="nx">timeoutTimer</span> <span class="o">&amp;&amp;</span> <span class="nx">clearTimeout</span><span class="p">(</span> <span class="nx">timeoutTimer</span> <span class="p">);</span></div><div class='line' id='LC256'>				<span class="nx">script</span><span class="p">[</span> <span class="nx">STR_ON_READY_STATE_CHANGE</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">script</span><span class="p">[</span> <span class="nx">STR_ON_LOAD</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">script</span><span class="p">[</span> <span class="nx">STR_ON_ERROR</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC257'>				<span class="nx">head</span><span class="p">[</span> <span class="nx">STR_REMOVE_CHILD</span> <span class="p">](</span> <span class="nx">script</span> <span class="p">);</span></div><div class='line' id='LC258'>				<span class="nx">scriptAfter</span> <span class="o">&amp;&amp;</span> <span class="nx">head</span><span class="p">[</span> <span class="nx">STR_REMOVE_CHILD</span> <span class="p">](</span> <span class="nx">scriptAfter</span> <span class="p">);</span></div><div class='line' id='LC259'>			<span class="p">};</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'>			<span class="c1">// Append main script</span></div><div class='line' id='LC262'>			<span class="nx">head</span><span class="p">[</span> <span class="nx">STR_INSERT_BEFORE</span> <span class="p">](</span> <span class="nx">script</span> <span class="p">,</span> <span class="p">(</span> <span class="nx">firstChild</span> <span class="o">=</span> <span class="nx">head</span><span class="p">.</span><span class="nx">firstChild</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'>			<span class="c1">// Append trailing script if needed</span></div><div class='line' id='LC265'>			<span class="nx">scriptAfter</span> <span class="o">&amp;&amp;</span> <span class="nx">head</span><span class="p">[</span> <span class="nx">STR_INSERT_BEFORE</span> <span class="p">](</span> <span class="nx">scriptAfter</span> <span class="p">,</span> <span class="nx">firstChild</span> <span class="p">);</span></div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'>			<span class="c1">// If a timeout is needed, install it</span></div><div class='line' id='LC268'>			<span class="nx">timeoutTimer</span> <span class="o">=</span> <span class="nx">timeout</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">setTimeout</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC269'>				<span class="nx">notifyError</span><span class="p">(</span> <span class="nx">STR_TIMEOUT</span> <span class="p">);</span></div><div class='line' id='LC270'>			<span class="p">}</span> <span class="p">,</span> <span class="nx">timeout</span> <span class="p">);</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>		<span class="p">}</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'>		<span class="k">return</span> <span class="nx">xOptions</span><span class="p">;</span></div><div class='line' id='LC275'>	<span class="p">}</span></div><div class='line' id='LC276'><br/></div><div class='line' id='LC277'>	<span class="c1">// ###################### SETUP FUNCTION ##</span></div><div class='line' id='LC278'>	<span class="nx">jsonp</span><span class="p">.</span><span class="nx">setup</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">xOptions</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC279'>		<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">xOptionsDefaults</span> <span class="p">,</span> <span class="nx">xOptions</span> <span class="p">);</span></div><div class='line' id='LC280'>	<span class="p">};</span></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'>	<span class="c1">// ###################### INSTALL in jQuery ##</span></div><div class='line' id='LC283'>	<span class="nx">$</span><span class="p">.</span><span class="nx">jsonp</span> <span class="o">=</span> <span class="nx">jsonp</span><span class="p">;</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'><span class="p">}</span> <span class="p">)(</span> <span class="nx">jQuery</span> <span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>

      <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
      <div id="jump-to-line" style="display:none">
        <h2>Jump to Line</h2>
        <form accept-charset="UTF-8" class="js-jump-to-line-form">
          <input class="textfield js-jump-to-line-field" type="text">
          <div class="full-button">
            <button type="submit" class="classy">
              Go
            </button>
          </div>
        </form>
      </div>

    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2012 <span title="0.07035s from fe2.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus command bar</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.07174' data-host='fe2'></span>
    
  </body>
</html>

