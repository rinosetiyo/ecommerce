import React from 'react'

function StoreFooter() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container my-3">
          <footer className="bg-dark text-white text-center py-4">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Store. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default StoreFooter
