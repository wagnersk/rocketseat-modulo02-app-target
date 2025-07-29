import { View   } from "react-native";
import {useLocalSearchParams} from "expo-router"
import { PageHeader } from "@/components/PageHeader";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function Transcation(){
    const params = useLocalSearchParams<{id: string}>()

    return(
        <View style={{flex:1 , padding:24 }}>
            <PageHeader 
                title="Nova transação"
                subtitle="A cada valor guardado voce fica mais próximo da sua meta. Se
                esforce para guardar e evitar retirar."
            />

            <View  style={{marginTop:32,gap:24}} >
                <CurrencyInput 
                    label="Valor (R$)"
                    value={0}
                />
                <Input 
                    label="Motivo (opcional)"
                    placeholder="Ex: Investir em CDB de 110% no banco XPTO"    
                />
                <Button title="Salvar" />
            </View>
 
        </View>
    )
}