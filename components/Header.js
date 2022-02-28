import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import {modalState} from "../atoms/modalAtoms"

function Header() {
  //destructure session -- {data: session, status}
  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalState)

  const router = useRouter()

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between xl:mx-auto">
        {/* Left */}
        <div
          onClick={() => router.push('/')}
          className="relative hidden w-24 cursor-pointer lg:inline-grid"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="content"
            alt="logo"
          />
        </div>
        <div
          onClick={() => router.push('/')}
          className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="content"
          />
        </div>
        {/* middle -search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block w-full rounded-md border-gray-500 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navBtn" />
          <MenuIcon className="h-10 w-10 cursor-pointer md:hidden" />
          {session ? (
            <>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn" />
                <div
                  className="absolute -top-2 -right-1 
              flex h-5 w-5 animate-pulse items-center 
              justify-center rounded-full bg-red-500 text-sm text-white"
                >
                  3
                </div>
              </div>

              <PlusCircleIcon className="navBtn"
              onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                className="h-10 w-10 cursor-pointer rounded-full"
                src={session.user.image}
                alt=""
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
