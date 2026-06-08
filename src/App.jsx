import "./App.css";
import {
  FiBox,
  FiAlertTriangle,
  FiMessageSquare,
  FiSidebar,
  FiTrendingUp,
  FiLayers,
  FiRefreshCw,
  FiBell,
  FiUser,
  FiAward,
  FiCalendar,
  FiCreditCard,
  FiGrid,
  FiTag,
  FiClock,
  FiInfo,
  FiCheckSquare,
  FiCalendar as FiDate,
  FiFileText,
  FiEdit,
  FiColumns,
  FiCircle,
  FiMinusSquare,
  FiList,
  FiToggleLeft,
  FiClock as FiTime,
  FiUpload,
  FiChevronDown,
  FiMenu,
  FiChevronsLeft,
  FiGitBranch,
  FiFolder,
} from "react-icons/fi";

function App() {
  const features = [
    {
      icon: "⚛️",
      title: "Latest React",
      desc: "Elstar built with latest version of React and modern development setup.",
    },
    {
      icon: "🌊",
      title: "Tailwind",
      desc: "Tailwind CSS is a utility-first framework for building UI.",
    },
    {
      icon: "🪝",
      title: "React Hooks",
      desc: "All components are written with React Hooks.",
    },
    {
      icon: "🌙",
      title: "Dark Mode",
      desc: "Dark and light mode available throughout the UI.",
    },
    {
      icon: "🌐",
      title: "Localization",
      desc: "Support multi-language and internationalization.",
    },
    {
      icon: "🔄",
      title: "Redux Toolkit",
      desc: "Easy state management with Redux Toolkit.",
    },
    {
      icon: "🎨",
      title: "Colors Options",
      desc: "Customize branding and theme colors.",
    },
    {
      icon: "📑",
      title: "Various Layout",
      desc: "Multiple layouts for different route structures.",
    },
    {
      icon: "TS",
      title: "TypeScript",
      desc: "Written in TypeScript for scalable code.",
    },
    {
      icon: "⚡",
      title: "Vite",
      desc: "Powered by Vite for blazing fast performance.",
    },
    {
      icon: "⚙️",
      title: "Configurable Structure",
      desc: "Easy customization and project organization.",
    },
    {
      icon: "🧩",
      title: "Practical Demo",
      desc: "Real world demo pages and use cases included.",
    },
  ];

  const demos = [
    {
      title: "Project - Dashboard",
      img: "https://static.themenate.net/elstar/img/demo/project-dashboard-light.jpg",
    },
    {
      title: "Project - Project List",
      img: "https://static.themenate.net/elstar/img/demo/project-list-light.jpg",
    },
    {
      title: "Project - Scrum Board",
      img: "https://static.themenate.net/elstar/img/demo/project-scrum-board-light.jpg",
    },
    {
      title: "Project - Issue",
      img: "https://static.themenate.net/elstar/img/demo/project-issue-light.jpg",
    },
    {
      title: "CRM - Dashboard",
      img: "https://static.themenate.net/elstar/img/demo/crm-dashboard-light.jpg",
    },
    {
      title: "CRM - Calendar",
      img: "https://static.themenate.net/elstar/img/demo/crm-calendar-light.jpg",
    },
    {
      title: "CRM - Customers",
      img: "https://static.themenate.net/elstar/img/demo/crm-customers-light.jpg",
    },
    {
      title: "CRM - Customer Details",
      img: "https://static.themenate.net/elstar/img/demo/crm-customer-detail-light.jpg",
    },
    {
      title: "CRM - Mail",
      img: "https://static.themenate.net/elstar/img/demo/crm-mail-light.jpg",
    },
    {
      title: "Sales - Dashboard",
      img: "https://static.themenate.net/elstar/img/demo/crypto-portfolio-light.jpg",
    },
    {
      title: "Sales - Product List",
      img: "https://static.themenate.net/elstar/img/demo/crypto-market-light.jpg",
    },
    {
      title: "Sales - Product Edit",
      img: "https://static.themenate.net/elstar/img/demo/crypto-wallets-light.jpg",
    },
    {
      title: "Sales - Product New",
      img: "https://static.themenate.net/elstar/img/demo/sales-product-new-light.jpg",
    },
    {
      title: "Sales - Order List",
      img: "https://static.themenate.net/elstar/img/demo/sales-order-list-light.jpg",
    },
    {
      title: "Sales - Order Details",
      img: "https://static.themenate.net/elstar/img/demo/sales-order-details-light.jpg",
    },
    {
      title: "And more...",
      img: "",
    },
  ];
  const components = [
    {
      icon: <FiBox />,
      title: "Button"
    },
    {
      icon: <FiAlertTriangle />,
      title: "Alert"
    },
    {
      icon: <FiMessageSquare />,
      title: "Dialog"
    },
    {
      icon: <FiSidebar />,
      title: "Drawer"
    },

    {
      icon: <FiTrendingUp />,
      title: "Progress"
    },
    {
      icon: <FiLayers />,
      title: "Skeleton"
    },
    {
      icon: <FiRefreshCw />,
      title: "Spinner"
    },
    {
      icon: <FiBell />,
      title: "Toast"
    },

    {
      icon: <FiUser />,
      title: "Avatar"
    },
    {
      icon: <FiAward />,
      title: "Badge"
    },
    {
      icon: <FiCalendar />,
      title: "Calendar"
    },
    {
      icon: <FiCreditCard />,
      title: "Card"
    },

    {
      icon: <FiGrid />,
      title: "Table"
    },
    {
      icon: <FiTag />,
      title: "Tag"
    },
    {
      icon: <FiClock />,
      title: "Timeline"
    },
    {
      icon: <FiInfo />,
      title: "Tooltip"
    },

    {
      icon: <FiCheckSquare />,
      title: "Checkbox"
    },
    {
      icon: <FiDate />,
      title: "DatePicker"
    },
    {
      icon: <FiFileText />,
      title: "Form Control"
    },
    {
      icon: <FiEdit />,
      title: "Input"
    },

    {
      icon: <FiColumns />,
      title: "Input Group"
    },
    {
      icon: <FiCircle />,
      title: "Radio"
    },
    {
      icon: <FiMinusSquare />,
      title: "Segment"
    },
    {
      icon: <FiList />,
      title: "Select"
    },

    {
      icon: <FiToggleLeft />,
      title: "Switcher"
    },
    {
      icon: <FiTime />,
      title: "Time Input"
    },
    {
      icon: <FiUpload />,
      title: "Upload"
    },
    {
      icon: <FiChevronDown />,
      title: "Dropdown"
    },

    {
      icon: <FiMenu />,
      title: "Menu"
    },
    {
      icon: <FiChevronsLeft />,
      title: "Pagination"
    },
    {
      icon: <FiGitBranch />,
      title: "Steps"
    },
    {
      icon: <FiFolder />,
      title: "Tabs"
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>

        <nav className="navbar">
          <div className="logo">
            <img
              src="https://static.themenate.net/elstar/img/logo/logo-dark-full.png"
              alt="logo"
            />
          </div>

          <ul>
            <li>Features</li>
            <li>Demos</li>
            <li>Components</li>
            <li>Documentation</li>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </ul>
        </nav>

        <div className="hero-content">
          <div className="hero-left">
            <h1>
              Modern admin UI <br />
              kit built with React <br />
              & Tailwind
            </h1>

            <p>
              Elstar has a complete set of UI components crafted with
              Tailwind & Typescript that fulfilled most of the use case
              which allows you to kickstart any project, saving up
              thousands of hours!
            </p>

            <div className="buttons">
              <button className="preview">Preview</button>
              <button className="template">
                Get this template
              </button>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="https://static.themenate.net/elstar/img/demo-img.png"
              alt="hero"
            />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-heading">
          <h2>Amazing Features</h2>

          <p>
            Elstar is feature rich, yet not overly complex and easily
            extensible, it comes with everything developers have been
            looking for.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="extra-features">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>
              Every page & components in Elstar is fully responsive and able
              to fit perfectly in any screens.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Well Documented</h3>
            <p>
              Well-documented and industry code structure that help developers
              understand the code easily.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Constantly Update</h3>
            <p>
              Elstar is constantly updated to ensure compatibility with latest
              technologies and best practices.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>Trusted Support</h3>
            <p>
              We will always around, when you have any question or concern,
              our support helps you solve any issues.
            </p>
          </div>
        </div>

        <div className="more-btn-wrap">
          <button className="more-btn">
            And a lot more...
          </button>
        </div>
      </section>

      <section className="layouts-section">
        <div className="layouts-container">

          <div className="layouts-left">
            <h2>Ready-to-use page layouts</h2>

            <p className="layout-desc">
              Every page in Elstar applied a pre-built layout, which makes it
              very easy to switch individual page designs or create a new page.
              It is possible to keep your pages consistent across your
              application or to use different layouts for different routes.
            </p>

            <div className="layout-item active">
              <h3>Modern</h3>
              <p>
                Well-structured layout with visual hierarchy of navigation
                bars showing content area
              </p>
            </div>

            <div className="layout-item">
              <h3>Classic</h3>
              <p>
                Typical dashboard layout, composed of side navigation and a
                dim content area which makes widget within visible at a glance
              </p>
            </div>

            <div className="layout-item">
              <h3>Stacked Side</h3>
              <p>
                Also has a side navigation & content area layout, but it has
                layered side navigation, its suitable for app with complex
                navigation structure
              </p>
            </div>

            <div className="layout-item">
              <h3>Simple</h3>
              <p>
                This layout vertically composition by a horizontal navigation
                & content area with limited width
              </p>
            </div>

            <div className="layout-item">
              <h3>Decked</h3>
              <p>
                Has the same structure as simple layout, but with an
                additional layer on navigation to accommodate more content
              </p>
            </div>
          </div>

          <div className="layouts-right">
            <div className="app">

              <header className="topbar">
                <div className="window-buttons">
                  <span className="btn red"></span>
                  <span className="btn yellow"></span>
                  <span className="btn green"></span>
                </div>
              </header>

              <div className="layout">
                <img
                  src="https://static.themenate.net/elstar/img/layouts/modern-light.png"
                  alt="hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="demos-section">
        <div className="demo-heading">
          <h2>Outstanding Demos</h2>
          <p>Check out our wide variety application examples.</p>
        </div>

        <div className="demo-grid">
          {demos.map((item, index) => (
            <div className="demo-card" key={index}>
              {item.img ? (
                <img src={item.img} alt={item.title} />
              ) : (
                <div className="more-card">
                  <h3>And more...</h3>
                </div>
              )}

              {item.img && <h4>{item.title}</h4>}
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <div className="component-header">
          <h2>Prebuilt Component</h2>

          <p>
            Tailwind is a very popular CSS framework, but there is no better
            react adapted component library on the web, however, this problem
            is solved here, Elstar provides many full-featured base UI
            components that can cover most front-end development use cases.
          </p>
        </div>

        <div className="component-grid">
          {components.map((item, index) => (
            <div className="component-card" key={index}>
              <span className="icon">
                {item.icon}
              </span>

              <h4>{item.title}</h4>
            </div>
          ))}
        </div>

        <div className="btn-wrapper">
          <button className="view-btn">
            View all components
          </button>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">

            <div className="cta-left">
              <h1>Get started with Elstar</h1>

              <p>
                Elstar is a prfessional template to build professional
                applications.
              </p>

              <p>
                Kickstart any project, save thousands of hours, and level up as a
                developer.
              </p>
            </div>

            <div className="cta-right">
              <button className="btn preview-btn">
                Preview Demo
              </button>

              <button className="btn buy-btn">
                Buy now
              </button>
            </div>

          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <div className="logo-circle">
            <img
              src="https://static.themenate.net/elstar/img/logo/logo-light-full.png"
              alt="hero"
            />
          </div>
        </div>

        <div className="footer-right">
          Copyright © 2026 Theme_Nate. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;