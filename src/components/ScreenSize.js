import React from 'react'

export default function ScreenSize () {

    var w = window.innerWidth;

  return (
    <div className="fixed bottom-0 right-0 p-4 h-4 bg-red-100 font-bold border flex justify-center items-center opacity-75">
      <div className="block tablet:hidden laptop:hidden desktop:hidden">
        Mobile {w}p
      </div>
      <div className="hidden tablet:block laptop:hidden desktop:hidden">
        Tablet {w}p
      </div>
      <div className="hidden tablet:hidden laptop:block desktop:hidden">
        Laptop {w}p
      </div>
      <div className="hidden tablet:hidden laptop:hidden desktop:block">
        Desktop {w}p
      </div>
    </div>
  );
}
