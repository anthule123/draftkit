import TimelineList from "@/components/versionManage/TimelineList";
import VersionFilter from "@/components/versionManage/VersionFilter";
import VersionFilterSimple from "@/components/versionManage/VersionFilterSimple";
import { getDictionary } from "@/utils/dictionaries";

export default async function Page( {params}: {
  params: Promise<{ locale?: string }>
}){
    const locale = (await params).locale || 'vi';
    const docsDivs = ['docs',
                        'versioned_docs/1.0']
        const dict = await getDictionary(locale);
    return (
        <div className="center">
          <VersionFilterSimple lang={locale}
                            bigRoute='analysis'
                            docsDivs = {docsDivs}   
                            dict={dict}  />
        </div>

    )
}

