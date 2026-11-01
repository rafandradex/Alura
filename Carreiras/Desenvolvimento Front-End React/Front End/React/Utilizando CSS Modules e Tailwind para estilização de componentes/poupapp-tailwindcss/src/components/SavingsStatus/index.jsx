import { ProgressBar } from "../ProgressBar"
import { IconSavings } from "../icons"

export const SavingStatus = () => {
    return(
        <div className="flex flex-col gap-10">
            <p className="text-secondary-income flex gap-2 items-center justify-center text-xl leading-[125%]">
            <IconSavings />
            Economizar
            </p>
            <ProgressBar percent={40} />
        </div>
    )
}