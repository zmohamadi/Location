<?php

namespace Models\Location;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Dehestan extends Model
{
    use Base;

    protected $table = 'location_dehestan';
    protected $fillable = ['name', 'ostan', 'shahrestan', 'bakhsh', 'amar_code'];

    public function bakhsh()
    {
        return $this->belongsTo(Bakhsh::class, 'bakhsh', 'id');
    }

    public function shahrestan()
    {
        return $this->belongsTo(Shahrestan::class, 'shahrestan', 'id');
    }

    public function abadis()
    {
        return $this->hasMany(Abadi::class, 'dehestan', 'id');
    }
}
